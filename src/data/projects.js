import quizcoco from "../assets/quizcoco.png"


export default [

{

id:1,

title:"QUIZCOCO : 퀴즈 기반 학습 웹 서비스",

summary:"게임형식 학습 웹 서비스로, 퀴즈를 통해 학습자들이 재미있게 지식을 습득할 수 있도록 지원합니다.",
 bg: quizcoco,
 urls:[{
    name:"Live Demo",
    link:"http://3.25.140.200:8080/"}],

stack:[
"Java",
"Spring Boot",
"MyBatis",
"MySQL",
"JavaScript",
"WebSocket"

],

period:"2024년 3월",

features:[

"게임형식 퀴즈 랜덤 출제 시스템",
"실시간 접속 사용자 표시",
"소셜 로그인 지원",
"개인 미니홈 및 방명록"

],

techniques:[

    "Custom SuccessHandler 기반 사용자 상태별 리다이렉트 처리",
    "Spring Security Form Login + OAuth2 통합 인증",
    "WebSocket 기반 실시간 접속 사용자 관리",
    "AWS EC2 + GitHub Actions 기반 배포 자동화",

],

problems:[

{
title:"접속자 중복",

reason:"웹소켓 세션 기준으로 접속자를 관리",

solve:"유저 ID 기준으로 세션 그룹화",

result:"실제 접속자 수를 안정적으로 유지"

},


{
title:"파일 저장 구조 개선",

reason:"로컬 저장 방식에서 AWS S3를 추가하는 과정에서 하나의 클래스가 여러 책임을 가지게 되었고, 추상화 하지않아 코드가 난잡하고, 기존 로직 변경 없이 기능을 확장하기 어려웠음",

solve:"인터페이스로 추상화하려고 했으나 둘의 업로드 방식의 차이로 어려움이 있었고 대신 공통으로 필요한 파일명, 경로 생성처리만 별도로 유틸클래스를 만들어 관리하였음",

result:"기능 확장 시 클래스 책임과 구조 설계를 고려하게 되었으며, 변경에 강한 코드의 중요성을 체감"

},

{
title:"OFFSET 페이징 성능 개선",

reason:"퀴즈 카드 상세 슬라이드 기능 구현 중 OFFSET 기반 페이징 사용 시 앞 페이지 데이터를 계속 스캔하여 데이터 증가에 따른 성능 저하가 예상됨",

solve:"인덱스를 활용하고 마지막 조회 데이터의 regDate와 id를 기준으로 조회하는 커서 기반 페이징 적용",

result:"불필요한 데이터 스캔을 줄여 조회 성능을 개선하고, 잠재적인 성능 문제를 사전에 대응"

}

]

},

{

id:2,

title:"RAG 챗봇 : 유사도 기반 문서 검색 시스템",
period:"2026년 3월",

summary:"텍스트 데이터를 기반으로 의미 중심 검색이 가능한 시스템 설계",
 urls:[{
    name:"GitHub",
    link:"https://github.com/mission-ground/study-rag-kyn"}],

stack:[

"Python","FAISS"

],
features:[
"유사도 기반 문서 검색",
"RAG 챗봇 인터페이스"
],
techniques:[


"FAISS 기반 벡터 검색",
"시멘틱 청킹을 활용한 문서 분할",
"Parent-Child Retrieval 기반 문맥 확장",


],
problems:[

{
title:"유사도 계산 정확도 개선",
reason:"단순 청킹 방식은 검색된 문서의 문맥이 단절되어 질문과 관련된 정보를 충분히 제공하지 못함",

solve:"시멘틱 청킹과 Parent-Child Retrieval 구조를 적용하여 검색은 세밀하게 수행하고 응답에는 상위 문맥을 함께 제공",

result:"검색 결과의 문맥 일관성을 향상시키고 의미 기반 검색 정확도를 개선"}
,

{title:"RAG 챗봇 초기 로딩 개선",

reason:"모델 로딩과 데이터 준비 과정으로 인해 UI 표시까지 수십 초가 소요",

solve:"Lazy Loading, Background Loading 및 청크 데이터 재사용 구조 적용",

result:"UI를 즉시 표시하고 무거운 작업을 백그라운드로 처리하여 사용자 체감 속도 개선"
}

]

}

]