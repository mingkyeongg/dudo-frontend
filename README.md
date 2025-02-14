# DUDO: AI 기반 직업 & 자격증 추천 시스템  
**5060 액티브 시니어를 위한 맞춤형 직업 및 자격증 추천 서비스**  



## 🎥 데모  
### 1. 로그인
![2025-02-1410 57 57-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/f392e1f0-5aa3-4bb1-9a53-dbceecfd293d)

### 2. 직종 & 자격증 추천
![2025-02-1411 02 48-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/8b3fe4a6-7575-47c8-80c8-94fd13a474da)

![2025-02-1411 31 15-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/fd45bda1-559e-4f10-b6db-1fce28cfb507)

### 3. 추천 아카이빙

![2025-02-1411 37 29-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e2d8c40d-2146-46dc-977e-d93c944657d0)



## ✨ 주요 기능  
✅ AI 기반 맞춤 자격증 추천  
✅ 추천 자격증 저장 및 관리  
✅ 관심 직업과 연관된 블로그/유튜브/구인 공고 제공  
✅ Firebase 기반 로그인 및 데이터 저장  

## 🛠 기술 스택  
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)  
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)  
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)  

## 🚀 설치 및 실행 방법  
1️⃣ **레포지토리 클론**
```sh
git clone https://github.com/username/dudo-frontend.git
cd dudo-frontend
npm install
npm run dev
```


### 📡 사용된 AWS 서비스
✅ **Amazon S3** – 정적 웹사이트 호스팅  
✅ **Amazon Route 53** – 도메인 네임 관리  
✅ **AWS Certificate Manager (ACM)** – SSL/TLS 인증서 적용  
✅ **CloudFront (선택 사항)** – CDN을 통한 성능 최적화


### 📦 CI/CD 파이프라인 (GitHub Actions)
이 프로젝트는 **GitHub Actions**를 사용하여 자동 배포됩니다.  
main 브랜치에 푸시되면 자동으로 빌드 및 S3에 업로드됩니다.
