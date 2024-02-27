// ✍🏼 エラーが出ないように修正してください
const win = {
  gu: "pa",
  choki: "gu",
  pa: "choki",
} as const;

// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(`グーに勝つ手は${win["gu"]}`);
console.log(`グーに勝つ手に勝つ手は${win[win["gu"]]}`);
console.log(`グーに勝つ手に勝つ手に勝つ手は${win[win[win["gu"]]]}`);

// ❌ 以下はエラーにしてください
console.log(`グーに勝つ手は${win["👌"]}`); // 存在しないキーを参照するとエラーにしたい
