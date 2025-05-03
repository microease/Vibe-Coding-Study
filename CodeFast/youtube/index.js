let LikesCounter = 0;
// const LikesCounter2 = 0;

// LikesCounter  = LikesCounter + 1;
//定义一个获取likeButton按钮的函数:
const likeButton = document.getElementById("likeButton");
// 函数addLike，显示like了多少次
const addLike = (inrementBy) => {
  LikesCounter += inrementBy;
  console.log(LikesCounter);
  //show number of likes on the button
  likeButton.innerText = `Like👍🏻(
          ${LikesCounter})`;
  if (LikesCounter === 10) {
    alert("Congrats!!");
  }
};

console.log(typeof LikesCounter);

likeButton.addEventListener("click", () => addLike(1));
