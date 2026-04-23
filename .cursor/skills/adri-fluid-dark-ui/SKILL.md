---
name: adri-fluid-dark-ui
description: >-
  Applies a dark, minimal portfolio layout inspired by the Squarespace Adri
  Fluid demo (adri-fluid-demo.squarespace.com): strong typographic hierarchy,
  generous whitespace, sectioned storytelling, stats, cards, testimonials,
  CTA, and FAQ. Use when building or styling this project's intro/portfolio
  pages, landing sections, or when the user asks for Adri-like, fluid-demo, or
  dark clean web design for this repo.
---

# Adri Fluid 데모 기반 · 다크 클린 UI

이 스킬은 **현재 저장소**에서 웹 UI를 만들거나 다듬을 때만 적용한다. 레퍼런스: [adri-fluid-demo.squarespace.com](https://adri-fluid-demo.squarespace.com).

## 레퍼런스에서 가져올 정보 구조 (콘텐츠 리듬)

- **히어로**: 짧은 인사 한 줄 + 역할/가치를 한 문단으로 압축.
- **섹션**: 큰 제목(H2 수준)과 보조 소제목(H4 수준) 교차로 리듬을 만든다.
- **접근/방식**: 2~3개의 짧은 블록(협업, 반복 개선 등)으로 나누어 스캔 가능하게.
- **숫자 강조**: 통계 한 줄(프로젝트 수, 경력, 만족 클라이언트 등)은 짧은 라벨과 큰 숫자로 대비.
- **작업/케이스**: 카드 그리드(이미지 또는 단색 플레이스홀더 + 제목 + 한 줄 설명).
- **인용**: 짧은 인용 + 출처(이름, 소속).
- **CTA**: 한 줄 제안 + 단일 주요 버튼.
- **FAQ**: 질문 소제목 + 2~4문장 답변, 접기 UI는 선택.

## 다크 테마 토큰 (기본값)

레퍼런스의 “공기감”은 **어두운 배경 + 넉넉한 패딩**으로 유지한다.

| 역할 | 권장 |
|------|------|
| 페이지 배경 | `#0a0a0b` ~ `#121214` |
| 표면(카드/패널) | 배경보다 1단계 밝게 (`#161618` 등) |
| 본문 텍스트 | `#e6e6ea` |
| 보조 텍스트 | `#9b9ba3` |
| 구분선 | `rgba(255,255,255,0.08)` ~ `0.12` |
| 악센트 | **1색만** (예: 차분한 블루/세이지/앰버 중 하나), 버튼·링크·포커스에만 사용 |

- 본문과 배경 **대비**는 WCAG를 의식한다(본문은 특히).
- 그림자는 과하지 않게; 다크에서는 **얇은 테두리 + 살짝 밝은 표면**이 그림자보다 자연스럽다.

## 타이포·레이아웃 (클린)

- **폰트**: 산세리프 1패밀리(또는 표제용 1 + 본문 1). 굵기는 2~3단계만(Regular / Medium / Semibold).
- **스케일**: 히어로 제목은 크게, 본문은 읽기 좋은 한 단계로 통일. `line-height`는 본문 1.5~1.65.
- **폭**: 본문 `max-width` 약 `65ch` 전후. 섹션은 `max-width` 1100~1200px + 좌우 여백.
- **간격**: 섹션 간 수직 간격을 크게(예: `clamp(3rem, 6vw, 6rem)`). 카드 내부 패딩 일관.
- **정렬**: 한 화면에 중심이 너무 많지 않게; 그리드는 **열 수를 줄이고** 여백으로 호흡.

## 인터랙션·디테일

- 호버: 미세한 밝기/테두리 변화, **큰 모션 금지**.
- 포커스 링: 키보드 사용자용으로 악센트와 동일 계열.
- 이미지: 둥근 모서리는 소프트(`8px`~`16px`) 또는 직각 중 하나로 통일.

## 작업 시 체크리스트

- [ ] 섹션 순서가 레퍼런스처럼 **이야기 흐름**인가(소개 → 방식 → 숫자/강점 → 작업 → 인용 → 연락/FAQ).
- [ ] 다크 팔레트가 3단계 이내로 유지되는가.
- [ ] 악센트가 한 가지 역할에만 쓰이는가.
- [ ] 모바일에서도 동일한 위계(제목 크기 단계)가 유지되는가.

## 범위

- 이 스킬은 **이 프로젝트**의 HTML/CSS/컴포넌트 스타일 작업에 우선한다.
- 레퍼런스 사이트의 자산·코드를 복제하지 말고, **구조와 리듬만** 참고한다.
