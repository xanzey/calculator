      const buttons = document.querySelectorAll("button");
      const result = document.querySelector("#result");
      buttons.forEach(button => {
        button.addEventListener("click", e => {
          if (e.target.id === "=") {
            result.value = eval(result.value);
          } else if (e.target.id === "clear") {
            result.value = "";
          } else {
            result.value += e.target.id;
          }
        });
      });