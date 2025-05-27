const users = [
    {
      username: "yoongicat",
      avatar: "https://i.pravatar.cc/80?img=5"
    },
    {
      username: "jinjin007",
      avatar: "https://i.pravatar.cc/80?img=12"
    },
    {
      username: "namtan92",
      avatar: "https://i.pravatar.cc/80?img=20"
    },
    {
      username: "cookiethief",
      avatar: "https://i.pravatar.cc/80?img=33"
    },
    {
      username: "mochimin",
      avatar: "https://i.pravatar.cc/80?img=44"
    }
  ];
  
  function drawWinner() {
    const url = document.getElementById("tweetUrl").value.trim();
    const resultEl = document.getElementById("result");
  
    if ((!url.includes("twitter.com") && !url.includes("x.com")) || !url.includes("/status/")) {
      alert("❌ ลิงก์ไม่ถูกต้อง กรุณาวางลิงก์โพสต์ Twitter หรือ X ที่มี /status/");
      return;
    }
  
    const winner = users[Math.floor(Math.random() * users.length)];
  
    document.getElementById("avatar").src = winner.avatar;
    document.getElementById("username").innerText = "@" + winner.username;
    resultEl.classList.remove("hidden");
  }
  