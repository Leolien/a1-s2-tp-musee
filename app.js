let votes = 0;
const voteButton = document.querySelector("#vote");
const voteOutput = document.querySelector("#votes");

voteButton.addEventListener("click", () => {
    votes += 1;
    voteOutput.textContent = `Votes : ${votes}`;
});
