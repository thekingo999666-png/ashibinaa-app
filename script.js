/* ===============================
   カテゴリ一覧
=============================== */
const categories = [
  "オススメ",
  "さっぱり",
  "チャンプル",
  "シリシリ",
  "玉子",
  "唐揚げ",
  "揚げ物",
  "天ぷら",
  "島そばで",
  "男爺のつまみ",
  "ご飯",
  "そば",
  "リゾット",
  "ビール",
  "ハイボール",
  "サワー",
  "茶割り",
  "焼酎",
  "泡盛（本島）",
  "泡盛（八重山）",
  "石垣のお酒",
  "リキュール"
];


/* ===============================
   メニュー（価格・種類）
=============================== */
const menuData = {
  "オススメ": [
    { n: "石垣牛ハンバーグ", p: 1600 },
    { n: "ざるもずく", p: 800 },
    { n: "もずくキムチ", p: 600 }
  ],

  "さっぱり": [
    { n: "島らっきょ", p: 500 },
    { n: "島らっきょクリームチーズベーコン", p: 700 },
    { n: "梅水晶", p: 500 },
    { n: "ゴーヤスライス", p: 400 },
    { n: "塩辛", p: 300 },
    { n: "塩辛3種盛り", p: 600 },
    { n: "海ぶどう", p: 600 }
  ],

  "チャンプル": [
    { n: "ゴーヤチャンプル", p: 800 },
    { n: "ソーメンチャンプル", p: 800 },
    { n: "豆腐チャンプル", p: 800 },
    { n: "フーチャンプル", p: 800 },
    { n: "らっきょチャンプル", p: 800 },
    { n: "カラシナチャンプル", p: 800 }
  ],

  "シリシリ": [
    { n: "人参シリシリ", p: 600 },
    { n: "パパイヤシリシリ", p: 600 }
  ],

  "玉子": [
    { n: "ポーク玉子", p: 700 },
    { n: "だし巻き", p: 600 },
    { n: "目玉焼き", p: 600 }
  ],

  "唐揚げ": [
    { n: "鶏の唐揚げ", p: 600 },
    { n: "タコ唐揚げ", p: 500 },
    { n: "イカ唐揚げ", p: 500 },
    { n: "エビ唐揚げ", p: 500 },
    { n: "チーズの棒", p: 500 }
  ],

  "揚げ物": [
    { n: "カーリーフライ", p: 600 },
    { n: "タコスボール", p: 600 }
  ],

  "天ぷら": [
    { n: "お任せ３種", p: 1000 },
    { n: "お任せ５種", p: 1500 }
  ],

  "島そばで": [
    { n: "ピリ辛エビトマト", p: 800 },
    { n: "ぽなペティート", p: 800 },
    { n: "あぐ〜ペペロン", p: 800 },
    { n: "本日の気まぐれ", p: 800 },
    { n: "島焼きそば（塩）", p: 800 },
    { n: "島焼きそば（シークヮーサー）", p: 800 }
  ],

  "男爺のつまみ": [
    { n: "たちつてと", p: 700 },
    { n: "ポチギ", p: 500 },
    { n: "ラフテー", p: 600 },
    { n: "ナーベラ", p: 600 },
    { n: "島豆腐", p: 500 }
  ],

  "ご飯": [
    { n: "がじゅ丼", p: 800 },
    { n: "らふて〜丼", p: 800 },
    { n: "焼き飯（らふて〜）", p: 800 },
    { n: "焼き飯（らっきょ）", p: 800 },
    { n: "ちゃんぽん", p: 800 }
  ],

  "そば": [
    { n: "ソーキそば", p: 800 },
    { n: "テビチそば", p: 1000 }
  ],

  "リゾット": [
    { n: "チーズリゾット", p: 900 },
    { n: "イカ墨リゾット", p: 900 },
    { n: "チーズトマトリゾット", p: 1000 }
  ],

  "ビール": [
    { n: "生ビール", p: 700, t: "drink" },
    { n: "瓶ビール", p: 700, t: "drink" }
  ],

  "ハイボール": [
    { n: "角ハイボール", p: 600, t: "alcohol" }
  ],

  "サワー": [
    { n: "レモンサワー", p: 600, t: "alcohol" },
    { n: "シークヮーサーサワー", p: 600, t: "alcohol" },
    { n: "ガリサワー", p: 600, t: "alcohol" },
    { n: "クエン酸サワー", p: 600, t: "alcohol" },
    { n: "男梅サワー", p: 600, t: "alcohol" }
  ],

  "茶割り": [
    { n: "ウーロンハイ", p: 600, t: "alcohol" },
    { n: "緑茶ハイ", p: 600, t: "alcohol" },
    { n: "さんぴん茶ハイ", p: 600, t: "alcohol" },
    { n: "無糖紅茶ハイ", p: 600, t: "alcohol" },
    { n: "ヒゲ茶ハイ", p: 600, t: "alcohol" }
  ],

  "焼酎": [
    { n: "黒霧島", p: 600, t: "alcohol" },
    { n: "二階堂", p: 600, t: "alcohol" },
    { n: "金宮", p: 600, t: "alcohol" },
    { n: "ダイヤメ（600円）", p: 600, t: "alcohol" }
  ],

  "泡盛（本島）": [
    { n: "菊之露", p: 600, t: "alcohol" },
    { n: "残波白", p: 600, t: "alcohol" },
    { n: "残波黒", p: 600, t: "alcohol" }
  ],

  "泡盛（八重山）": [
    { n: "請福", p: 600, t: "alcohol" },
    { n: "八重泉", p: 600, t: "alcohol" },
    { n: "玉の露", p: 600, t: "alcohol" },
    { n: "おもと", p: 600, t: "alcohol" },
    { n: "黒真珠", p: 850, t: "alcohol" }
  ],

  "石垣のお酒": [
    { n: "IMUGE 25°", p: 600, t: "alcohol" },
    { n: "IMUGE 37°", p: 600, t: "alcohol" },
    { n: "島ラム", p: 700, t: "rum" }
  ],

  "リキュール": [
    { n: "せいふく（ゆず）", p: 600, t: "alcohol" },
    { n: "せいふく（生姜レモン）", p: 600, t: "alcohol" },
    { n: "せいふく（シークヮーサー）", p: 600, t: "alcohol" },
    { n: "せいふく（パッションフルーツ）", p: 600, t: "alcohol" }
  ]
};


/* ===============================
   カテゴリ生成
=============================== */
const categoryList = document.getElementById("categoryList");
const menuList = document.getElementById("menuList");

categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "category-item";
  div.textContent = cat;
  div.dataset.cat = cat;
  div.onclick = () => showCategory(cat);
  categoryList.appendChild(div);
});


/* ===============================
   メニュー表示
=============================== */
function showCategory(cat) {
  document.querySelectorAll(".category-item").forEach(c =>
    c.classList.remove("active")
  );
  document.querySelector(`.category-item[data-cat="${cat}"]`).classList.add("active");

  menuList.innerHTML = "";

  menuData[cat].forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.onclick = () => openModal(item);

    div.innerHTML = `
      <span class="menu-title">${item.n}</span>
      <span class="menu-price">¥${item.p}</span>
    `;

    menuList.appendChild(div);
  });
}


/* ===============================
   モーダル（詳細入力）
=============================== */
const modal = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const qtyNumber = document.getElementById("qtyNumber");
const memoInput = document.getElementById("memoInput");

let currentItem = null;

function openModal(item) {
  currentItem = item;
  modalTitle.textContent = item.n;
  modalPrice.textContent = `¥${item.p}`;
  qtyNumber.textContent = 1;
  memoInput.value = "";

  const optBox = document.getElementById("modalOptions");
  optBox.innerHTML = "";

  let opts = [];

  if (item.t === "rum") {
    opts = ["ソーダ", "ロック", "ストレート"];
  } else if (item.t === "alcohol") {
    opts = ["水割り", "ソーダ割り", "ロック", "ストレート"];
  }

  opts.forEach(op => {
    const b = document.createElement("div");
    b.className = "option-btn";
    b.textContent = op;

    b.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(x =>
        x.classList.remove("active")
      );
      b.classList.add("active");
    };

    optBox.appendChild(b);
  });

  modal.style.display = "flex";
}

document.getElementById("closeModalBtn").onclick = () => {
  modal.style.display = "none";
};


/* ===============================
   数量変更
=============================== */
document.getElementById("qtyPlus").onclick = () => {
  qtyNumber.textContent = Number(qtyNumber.textContent) + 1;
};

document.getElementById("qtyMinus").onclick = () => {
  qtyNumber.textContent = Math.max(1, Number(qtyNumber.textContent) - 1);
};


/* ===============================
   カート処理
=============================== */
let cart = [];
const cartItemsBox = document.getElementById("cartItems");
const cartTotalBox = document.getElementById("cartTotal");

document.getElementById("addCartBtn").onclick = () => {
  const qty = Number(qtyNumber.textContent);

  let option = "";
  const active = document.querySelector(".option-btn.active");
  if (active) option = active.textContent;

  const memo = memoInput.value;

  cart.push({
    name: currentItem.n,
    price: currentItem.p,
    qty,
    option,
    memo,
    type: currentItem.t ? "drink" : "food"
  });

  updateCart();
  modal.style.display = "none";
};


/* ===============================
   カート更新
=============================== */
function updateCart() {
  cartItemsBox.innerHTML = "";
  let total = 0;

  cart.forEach(it => {
    total += it.price * it.qty;

    const row = document.createElement("div");
    row.className = "cart-row";

    row.innerHTML = `
      ${it.name} ×${it.qty}
      ${it.option ? "（" + it.option + "）" : ""}
      ${it.memo ? "【" + it.memo + "】" : ""}
    `;

    cartItemsBox.appendChild(row);
  });

  cartTotalBox.textContent = `合計: ¥${total}`;
}


/* ===============================
   注文送信（Workers → LINE）
=============================== */
document.getElementById("sendBtn").onclick = async () => {
  const seat = document.getElementById("seatSelect").value;

  if (!seat) {
    alert("席を選択してください");
    return;
  }

  if (cart.length === 0) {
    alert("カートが空です");
    return;
  }

  const food = [];
  const drink = [];

  cart.forEach(it => {
    let line = `${it.name} ×${it.qty}`;
    if (it.option) line += `（${it.option}）`;
    if (it.memo) line += `【${it.memo}】`;

    if (it.type === "drink") drink.push(line);
    else food.push(line);
  });

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);

  const payload = { seat, food, drink, total };

  try {
    await fetch("https://odd-shape-3114.ashibinaa-izakaya.workers.dev/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    alert("注文を送信しました！");
    cart = [];
    updateCart();
  } catch (err) {
    alert("送信エラー：" + err);
  }
};


/* ===============================
   初期表示
=============================== */
showCategory("オススメ");
