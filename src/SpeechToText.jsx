import React, { useState, useEffect } from "react";

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let speechRecognizer = null;

  useEffect(() => {
    if (!recognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    speechRecognizer = new recognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "ko-KR";

    speechRecognizer.onresult = (event) => {
      const result = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");
      setTranscript(result);
    };

    speechRecognizer.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
    };

    return () => {
      speechRecognizer.abort();
    };
  }, []);

  const startListening = () => {
    if (speechRecognizer) {
      setIsListening(true);
      speechRecognizer.start();
    }
  };

  const stopListening = () => {
    if (speechRecognizer) {
      setIsListening(false);
      speechRecognizer.stop();
    }
  };

  return (
    <div>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "⏹️ 음성 인식 중지" : "🎤 음성 인식 시작"}
      </button>
      <p>📝 실시간 변환된 텍스트: {transcript}</p>
    </div>
  );
};

export default SpeechToText;
