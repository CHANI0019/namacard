# 구현 계획: 소개영상 파일 직접 업로드 기능 추가

사용자가 유튜브 등 외부 스트리밍 비디오 링크에 의존하지 않고, 본인 기기에 있는 동영상 파일(MP4, WebM 등)을 직접 업로드하여 소개 영상으로 등록할 수 있는 기능을 구현합니다.

## 핵심 요구사항 및 설계

1. **로컬 동영상 파일 업로드**:
   - 편집기(`edit.html`)의 "추가 콘텐츠 설정" 섹션에 동영상 파일 업로드 컨트롤(`<input type="file" accept="video/*">`)을 추가합니다.
   - 사용자가 파일을 선택하면 `FileReader.readAsDataURL()`을 이용하여 비디오를 **Base64 Data URL**로 인코딩합니다.
2. **저장 용량 초과 대응 및 파일 용량 제한**:
   - 동영상 파일의 크기는 최대 **3.0MB 이하**로 제한합니다.
   - 이미지(1.5MB), PDF(2.5MB), 비디오(3.0MB)가 동시에 업로드될 경우 브라우저 로컬 스토리지의 한도(5MB)를 초과할 수 있습니다.
   - 이를 방지하기 위해 `saveToLocalStorage()` 함수 내에 **`QuotaExceededError` 예외 처리**를 구현하여 저장 공간이 부족할 시 사용자에게 파일 크기 축소 또는 URL 기입 방식을 사용하도록 명확하게 안내합니다.
3. **공유용 링크 복사 시 제외**:
   - 비디오 데이터는 초고용량 바이너리이므로, 공유용 고유 링크 복사 시 `videoBase64` 데이터를 제외(`delete`) 처리하여 URL 크기 한계(8KB) 초과로 인한 주소 손상을 완벽하게 방지합니다.
4. **HTML5 `<video>` 요소의 다이렉트 `src` 매핑**:
   - 기존의 `<source src="..." type="video/mp4">` 대신 `<video src="...">` 속성을 직접 바인딩하여, Base64 Data URL 내부의 다양한 MIME 타입(MP4, WebM 등)을 브라우저가 유연하게 네이티브 재생할 수 있도록 렌더링 코드를 개선합니다.

---

## Proposed Changes

### [Component: 명함 편집기 확장]

#### [MODIFY] [edit.html](file:///d:/digital-namecard/edit.html)
- '추가 콘텐츠 설정 (영상 및 제안서)' 섹션 내 소개영상 주소 입력 필드 하단에 **소개영상 직접 업로드** 필드 추가.

#### [MODIFY] [edit.js](file:///d:/digital-namecard/edit.js)
- `defaultCardData`에 `videoBase64: ""` 필드 정의.
- `setupInputListeners()` 내에 소개영상 파일 선택 이벤트 리스너 추가.
  - 비디오 타입(`video/*`) 검증 및 용량(3.0MB) 제한 유효성 검사 적용.
  - `FileReader`를 통한 Base64 로딩 처리 및 기존 URL 필드 초기화 연동.
  - 기존 소개영상 URL을 입력 시 파일 선택 입력 필드 및 `videoBase64` 변수를 초기화하는 상호 동기화 UX 추가.
- `copyShareableLink()` 함수에서 URL 직렬화하기 전 `videoBase64` 필드를 제외(delete) 처리.
- `saveToLocalStorage()` 함수에 `try-catch` 블록을 구성하여 로컬 스토리지 저장 용량 초과 (`QuotaExceededError`) 시 예외 알림 팝업 구현.

### [Component: 명함 렌더링 확장]

#### [MODIFY] [app.js](file:///d:/digital-namecard/app.js)
- `defaultCardData`에 `videoBase64: ""` 정의.
- `injectCardDataToDOM()`에서 `renderVideoElement` 함수 호출 시 `activeCardData.videoBase64 || activeCardData.videoUrl`을 인자로 전달.
- `renderVideoElement(url)` 함수 내부에서 직접 MP4 / 일반 비디오 출력 시 `<video>` 태그의 `src` 어트리뷰트에 `url`을 다이렉트로 바인딩하도록 마크업 구조 수정.

---

## Verification Plan

### 수동 검증
1. **동영상 파일 업로드 및 프리뷰 테스트**: 편집기에서 3MB 이하의 MP4 동영상 파일을 직접 업로드하고 [내 기기에 저장] 클릭.
2. **저장 한도 초과(QuotaExceededError) 검증**: 고용량 PDF와 고용량 동영상, 이미지를 동시에 올려서 5MB 한도를 의도적으로 초과시켰을 때 경고 팝업이 출력되는지 확인.
3. **메인 화면 재생 테스트**: 명함 메인 페이지(`index.html`)로 이동하여 소개영상 재생 버튼 클릭 시 업로드했던 MP4 동영상이 모달 창 안에서 즉각 소리/영상과 함께 네이티브로 재생되는지 확인.
4. **모달 닫기 시 정지 테스트**: 동영상이 재생되는 도중 모달의 닫기 버튼이나 여백을 클릭했을 때 영상 재생 및 오디오가 완벽히 정지되는지 검증.
5. **공유 링크 생성 검증**: 비디오 파일이 업로드된 상태에서 [공유용 링크 복사] 클릭 시 오류 없이 텍스트 중심의 URL이 생성되어 클립보드에 복사되는지 검증.
