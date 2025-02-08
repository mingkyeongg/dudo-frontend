import React, { useState, useRef } from "react";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  // 🎤 녹음 시작
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
        const audioFile = new File([audioBlob], "recorded_audio.webm", {
          type: "audio/webm",
        });

        setAudioUrl(URL.createObjectURL(audioBlob));
        await transcribeAudio(audioFile);
      };

      mediaRecorder.current.start();
      setRecording(true);
    } catch (error) {
      console.error("🎤 마이크 접근 실패:", error);
    }
  };

  // ⏹️ 녹음 중지
  const stopRecording = () => {
    if (mediaRecorder.current && recording) {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  // 📝 Whisper API로 전송 후 텍스트 변환
  const transcribeAudio = async (audioFile) => {
    const formData = new FormData();
    formData.append("file", audioFile);
    formData.append("model", "whisper-1");

    try {
      const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`,
        },
        body: formData,
      });

      const data = await response.json();
      setTranscript(data.text);
    } catch (error) {
      console.error("📝 Whisper API 요청 실패:", error);
    }
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "⏹️ 녹음 중지" : "🎤 녹음 시작"}
      </button>
      {audioUrl && <audio controls src={audioUrl}></audio>}
      {transcript && <p>📝 변환된 텍스트: {transcript}</p>}
    </div>
  );
};

export default AudioRecorder;
