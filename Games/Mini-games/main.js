
      class Start {
        constructor() {
          this.playerName = "Anda";
          this.botName = "rvBot";
          this.playerOption;
          this.botOption;
          this.winner = "";
        }

        get gBotOption() {
          return this.botOption;
        }

        set sBotOption(option) {
          this.botOption = option;
        }

        get gPlayerOption() {
          return this.playerOption;
        }

        set sPlayerOption(option) {
          this.playerOption = option;
        }

        botBrain() {
          const option = ["✊", "✌️", "✋"];
          const bot = option[Math.floor(Math.random() * option.length)];
          return bot;
        }

        winCalculation() {
          if (this.botOption == "✋" && this.playerOption == "✌️") {
            return (this.winner = this.playerName);
          } else if (this.botOption == "✋" && this.playerOption == "✊") {
            return (this.winner = this.botName);
          } else if (this.botOption == "✌️" && this.playerOption == "✊") {
            return (this.winner = this.playerName);
          } else if (this.botOption == "✌️" && this.playerOption == "✋") {
            return (this.winner = this.botName);
          } else if (this.botOption == "✊" && this.playerOption == "✋") {
            return (this.winner = this.playerName);
          } else if (this.botOption == "✊" && this.playerOption == "✌️") {
            return (this.winner = this.botName);
          } else {
            return (this.winner = "Seri");
          }
        }

        matchResult() {
          if (this.winner !== "Seri") {
            return `${this.winner} Menang`;
          } else {
            return `yahh ${this.winner}, tida ada pemenang`;
          }
        }
      }

      function pickOption(params) {
        const start = new Start();
        start.sPlayerOption = params;
        start.sBotOption = start.botBrain();
        start.winCalculation();

        console.log("hasil :", start.matchResult());

        const inGame = document.getElementById("inGame");
        const result = document.getElementById("result");

        inGame.textContent = "..."
        result.textContent = "..."
        setTimeout(() => {
          inGame.textContent = `${start.gPlayerOption} VS ${start.gBotOption}`;
          result.textContent = start.matchResult();
        }, 1500);
      }