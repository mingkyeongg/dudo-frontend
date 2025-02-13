import dudoMascot from "../../assets/dudo_mascot.svg";
import dudoLogo from "../../assets/dudo_logo.svg";
import BoxResume from "./BoxResume.jsx";
import LoginButtons from "./LoginButtons.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../components/common/libraries/firebase.js';
import { collection, doc, setDoc } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const jsonData = [
    {
        "지게차운전기능사": {
            "certification_rank": 1,
            "certification_name": "지게차운전기능사",
            "job_post_title": "(주)에이앤비 주간 지게차 물류사원 채용 공고",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K172122502130030&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=G6f_f1pn83U&pp=ygUm7KeA6rKM7LCo7Jq07KCE6riw64ql7IKsIOy3qOyXhSDtm4TquLA%3D",
            "youtube_title": "지게차 자격증 취업 준비하시면 한번 쯤 보기 좋은 영상",
            "blog_link": "https://blog.naver.com/hyo761/223726959557",
            "blog_title": "지게차운전기능사 2종 보통면허 취득방법 및 합격 후기"
        }
    },
    {
        "한식조리기능사": {
            "certification_rank": 2,
            "certification_name": "한식조리기능사",
            "job_post_title": "영덕제일요양병원에서 조리사 선생님을 구합니다. 기숙사 제공가능",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K141112502130053&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=d_9gDKUBZDY",
            "youtube_title": "5060 여성 1위 자격증 한식조리기능사의 모든 것! ‘한식조리기능사’ 따면 한 달에 얼마나 벌까? #여성자격증",
            "blog_link": "https://blog.naver.com/cssin/223757816294",
            "blog_title": "한식 조리 기능사 도전 Project"
        }
    },
    {
        "전기기사": {
            "certification_rank": 3,
            "certification_name": "전기기사",
            "job_post_title": "[소노인터내셔널] 전국 사업장 시설직무 신입/경력 인재채용",
            "job_post_url": "https://www.jobkorea.co.kr/Recruit/GI_Read/46436661?Oem_Code=C1&utm_source=work.go.kr&utm_medium=referral&utm_campaign=worknet",
            "youtube_link": "https://www.youtube.com/watch?v=LW3CjPMINto",
            "youtube_title": "중장년 노후대비 자격증 전기기능사 취업 현실(은퇴, 퇴직 대비 자격증",
            "blog_link": "https://blog.naver.com/jans90/223731863649",
            "blog_title": "전기기사 응시조건 준비 단 기간에 끝냈어요"
        }
    },
    {
        "건축기사": {
            "certification_rank": 4,
            "certification_name": "건축기사",
            "job_post_title": "대영이엠씨(주) 건물 외부리모델링 최고 고수가 되실분을 모십니다",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K120142502130021&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=8Qkl5-8Lt-s&list=PLZKomJuh3TqzyNSwQ93yASAGJv5X43mhy",
            "youtube_title": "나이 무관하게 취업할 수 있는 추천 자격증 4 ㅣ건축기사 자격증 ㅣ경력수첩채우기, 건설회사 취업가능!",
            "blog_link": "https://blog.naver.com/jook2gg/223756842284",
            "blog_title": "건축기사 응시자격 알아보고 시험까지 합격했어요"
        }
    },
    {
        "전기산업기사": {
            "certification_rank": 5,
            "certification_name": "전기산업기사",
            "job_post_title": "현장 전기 (산업기사)이상의 기술자 모집",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K120142502130021&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://youtu.be/FMvmaIyHTsM?feature=shared",
            "youtube_title": "전기산업기사 따는 사람들은 무슨생각으로 따고? 전기산업기사 준비하는걸까?",
            "blog_link": "https://blog.naver.com/skye2347/223739687368",
            "blog_title": "전기산업기사 자격요건 과정 3개월 만에 준비했어요"
        }
    },
    {
        "전기기능사": {
            "certification_rank": 6,
            "certification_name": "전기기능사",
            "job_post_title": "전기 강사 모집(시간강사 가능)",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K131412502130048&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=3pa7h3WcU-Q",
            "youtube_title": "중장년 노후대비 자격증 전기기능사 취업 현실(은퇴, 퇴직 대비 자격증)",
            "blog_link": "https://blog.naver.com/togyu911/223413718116",
            "blog_title": "전기기능사 여자 자격증 취득 후기"
        }
    },
    {
        "토목기사": {
            "certification_rank": 7,
            "certification_name": "토목기사",
            "job_post_title": "영업 팀장(전기공사,기계설비 공사)-국내 중견 코스피 상장 그룹사",
            "job_post_url": "https://job.incruit.com/jobdb_info/jobpost.asp?job=2502130004784&pco=583&utm_campaign=incruitfeed&utm_source=work.go.kr&utm_medium=referral",
            "youtube_link": "https://www.youtube.com/watch?v=XqhlD0N_xAM",
            "youtube_title": "토목기사 전망, 연봉, 응시자격 + 무조건 토목기사로 취득해야 하는 이유.",
            "blog_link": "https://blog.naver.com/hyesung5682/223735640803",
            "blog_title": "토목기사 관련학과 인강 듣고 쉽게 만들었어요!"
        }
    },
    {
        "직업상담사2급": {
            "certification_rank": 8,
            "certification_name": "직업상담사2급",
            "job_post_title": "(주)일로이룸 동부취업지원센터 국민취업지원제도 전담상담원 채용",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K140162502130005&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=_DrVVUnGm8g",
            "youtube_title": "직업상담사 자격증, 정말 취업 될까?",
            "blog_link": "https://blog.naver.com/cjs1748/223756937439",
            "blog_title": "직업상담사2급 강의 선택 공부 독학방법"
        }
    },
    {
        "컴퓨터활용능력2급": {
            "certification_rank": 9,
            "certification_name": "컴퓨터활용능력2급",
            "job_post_title": "배차마감 사무직원 채용합니다.",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K160042502130032&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=k-UEALtgQUY&pp=ygUZ7Lu07ZOo7YSw7Zmc7Jqp64ql66ClMuq4iQ%3D%3D",
            "youtube_title": "컴활 2급 실기 엑셀 스프레드시트 과목 1시간만 공부하시면 컴퓨터활용능력 시험 보는데 아주 도움이 됩니다",
            "blog_link": "https://blog.naver.com/ds2eof/223595097523",
            "blog_title": "컴퓨터활용능력 2급 후기 필기 합격 공부 방법"
        }
    },
    {
        "자동차정비기능사": {
            "certification_rank": 10,
            "certification_name": "자동차정비기능사",
            "job_post_title": "티스테이션 마산중앙점에서 자동차 정비 기사(기능사)모집합니다.",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K131112502130030&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=EXAPPtoqyes",
            "youtube_title": "자동차 정비를 시작해보려고 하는 사람들에게..",
            "blog_link": "https://blog.naver.com/dkstoa12/223751537312",
            "blog_title": "대전자동차정비기능사학원 합격 후기 전달드려요"
        }
    },
    {
        "정보처리기사": {
            "certification_rank": 11,
            "certification_name": "정보처리기사",
            "job_post_title": "[대전 서구] 네트워크 엔지니어",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=265884&infoTypeCd=CWT&infoTypeGroup=tb_workinfogubun",
            "youtube_link": "https://www.youtube.com/watch?v=_TSFxfQftds",
            "youtube_title": "정보처리 기사 자격증 취직할 때 유리한가요? 이력서 볼때 면접 볼 때 자격증을 어떻게 생각할지",
            "blog_link": "https://blog.naver.com/bobe26/223759147665",
            "blog_title": "정보처리기사 자격요건 단기간에 준비한 방법"
        }
    },
    {
        "산업안전기사": {
            "certification_rank": 12,
            "certification_name": "산업안전기사",
            "job_post_title": "사업장 안전관리자",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K151412502130051&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=in4JxpjD-fk",
            "youtube_title": "산업안전기사 취득 후 취업 현실(취업 분야 l 인기 있는 이유 l 경쟁력 갖추는 꿀팁)",
            "blog_link": "https://blog.naver.com/shinae1103/223731792283",
            "blog_title": "산업안전기사 자격조건 15주 만에 준비했어요"
        }
    },
    {
        "공조냉동기계기능사": {
            "certification_rank": 13,
            "certification_name": "공조냉동기계기능사",
            "job_post_title": "냉동설비관리기사(공무포함)",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K161132502130040&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=eht6OegrB9I&list=PLkQQ5cDaQzTXjAsGEfc8i41plK6iAMEHV",
            "youtube_title": "(고음질 버전) 공조냉동기계기사 시험 솔직한 합격후기와 취업 그리고 유의점",
            "blog_link": "https://blog.naver.com/kcist_or_kr/223719907296",
            "blog_title": "공조냉동기계기능사 실습받기"
        }
    },
    {
        "건설안전기사": {
            "certification_rank": 14,
            "certification_name": "건설안전기사",
            "job_post_title": "플랜트건설분야 안전관리자 모집",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K131212502130054&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://youtu.be/ywYTOwYOlXI?feature=shared",
            "youtube_title": "건설안전기사와 산업안전기사를 고민하신다면 이 영상을 봐주세요…",
            "blog_link": "https://blog.naver.com/jans90/223746013445",
            "blog_title": "건설안전기사 응시자격 쉽게 학습해서 갖췄어요"
        }
    },
    {
        "건축산업기사": {
            "certification_rank": 15,
            "certification_name": "건축산업기사",
            "job_post_title": "건축(철거)분야 공무수행, 내역서 작성 및 설계변경가능자 모집",
            "job_post_url": "https://m.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K150012502130050&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://youtu.be/rTmImpBie9I?feature=shared",
            "youtube_title": "시공사 취업준비를 한다고...? 시공사에서 느꼈던 솔직 후기😤ㅣ취준생, 취업, 건축시공, 건축기사, 직무후기🏗️",
            "blog_link": "https://blog.naver.com/hansolacademybooks/223363387416",
            "blog_title": "건축산업기사 실기 인강, 3년제 전공 합격 후기(+한솔아카데미 추천)"
        }
    },
    {
        "전자캐드기능사": {
            "certification_rank": 16,
            "certification_name": "전자캐드기능사",
            "job_post_title": "CAD/CAM 인원 모집 공고",
            "job_post_url": "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K151652501210019&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=YWSyg6O2iiA&list=PLr5TGCB783p5Ltb030uF5HMBiltUrDTVS",
            "youtube_title": "[전자캐드기능사(OrCAD17.2)] 체험해보기",
            "blog_link": "https://blog.naver.com/man_up201/223749846354",
            "blog_title": "2025년 전자캐드기능사 시험일정 응시자격 합격률 및 가산점 및 혜택 총정리"
        }
    },
    {
        "대기환경기사": {
            "certification_rank": 17,
            "certification_name": "대기환경기사",
            "job_post_title": "대기환경기사 취득 후 측정업에서 5년이상 근무자 또는 대기측정분석사 모십니다",
            "job_post_url": "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K172112412260052&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=IOYb_ARu1qM",
            "youtube_title": "대기환경기사 공부방법! 직장생활 하면서 자격증 취득 하기",
            "blog_link": "https://blog.naver.com/jans90/223750789028",
            "blog_title": "에너지관리기능사 필기 마스터 2025 완벽 대비"
        }
    },
    {
        "에너지관리기능사": {
            "certification_rank": 18,
            "certification_name": "에너지관리기능사",
            "job_post_title": "세이브존 노원 마린스포츠센터 시설팀장( 에너지관리기능사) 모집",
            "job_post_url": "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K120612502130005&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=txvTtHiGPXs",
            "youtube_title": "에너지관리기사 자격증 이건 알고 시작하자 | 시설관리, 보일러, 에너지, 자격증",
            "blog_link": "https://blog.naver.com/onetoppro/223725903846",
            "blog_title": "에너지관리기능사 필기 마스터 2025 완벽 대비"
        }
    },
    {
        "워드프로세서": {
            "certification_rank": 19,
            "certification_name": "워드프로세서",
            "job_post_title": "(경남)휴직대체 인력 기간제근로자(분야: 원산지 보조원) 채용 공고",
            "job_post_url": "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K131132502060074&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=7JKtI5dD-1E",
            "youtube_title": "면접에서 계속 워드 엑셀 할줄 아냐고 물어보는데, 결국 자격증 다 따야 하는거 아닌가요? (컴활, 워드, ITQ)",
            "blog_link": "https://blog.naver.com/hanadul45/223703235288",
            "blog_title": "워드프로세서 1급 독학 합격 후기(노베이스)"
        }
    },
    {
        "가스기능사": {
            "certification_rank": 20,
            "certification_name": "가스기능사",
            "job_post_title": "(주)스카이비 버스 수소충전소 수소충전원 2명(기능사 이상)",
            "job_post_url": "https://www.work24.go.kr/wk/a/b/1500/empDetailAuthView.do?wantedAuthNo=K151412501230011&infoTypeCd=VALIDATION&infoTypeGroup=tb_workinfoworknet",
            "youtube_link": "https://www.youtube.com/watch?v=wRh04nkgOGE",
            "youtube_title": "가스기능사 꼭 취득해야하는 이유!!",
            "blog_link": "https://blog.naver.com/samwonbks/223679981604",
            "blog_title": "2025 가스기능사 필기 한권으로 합격하기"
        }
    }
];

  const imageStyle = {
    width: "90px",
    height: "auto",
  };

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "20px",
      padding: "0px 20%",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    },
    titleText: {
      fontSize: "18px",
    },
    titleLogo: {
      fontSize: "31px",
      fontWeight: "900",
      display: "flex",
      gap: "10px",
    },
    logoImageStyle: {
      width: "125px",
      height: "auto",
    },
    mascotContainer: {
      textAlign: "center",
    },
    mascotImageStyle: {
      width: "193px",
      height: "193px",
    },
    mascotText: {
      fontSize: "14px",
      color: "#806B4C",
    },
    button: {
      border: "none",
      backgroundColor: "#FFFFFC",
      cursor: "pointer",
    }
  };

  // const uploadDataToFirestore = async () => {
  //   try {
  //     const collectionRef = collection(db, "certifications");

  //     for (const item of jsonData) {
  //       const [key, value] = Object.entries(item)[0];
  //       await setDoc(doc(collectionRef, key), value);
  //       console.log(`Added: ${key}`);
  //     }

  //     console.log("모든 데이터가 Firestore에 저장되었습니다!");
  //   } catch (error) {
  //       console.error("Firestore 저장 중 오류 발생:", error);
  //   }
  // };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("로그인한 사용자 UID:", uid);

      // uploadDataToFirestore();
    } else {
      console.log("로그인하지 않은 상태입니다.");
    }
  });
  

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <div style={style.container}>

        <div style={style.title}>
          <p style={style.titleText}>당신의 <strong>두</strong> 번째 <strong>도</strong>전을 위해,</p>
          <div style={style.titleLogo}>
            <p>두도</p>
            <img src={dudoLogo} style={style.logoImageStyle}></img>
          </div>
        </div>

        <div style={style.mascotContainer}>
          <img src={dudoMascot} style={style.mascotImageStyle}></img>
          <p style={style.mascotText}>두도의 마스코트 <strong>'두도지'</strong></p>
        </div>

        <BoxResume 
          title={"이메일"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BoxResume 
          title={"비밀번호"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButtons 
          email={email}
          password={password}
        />
      </div>
    </>
  )
}

export default Login;
