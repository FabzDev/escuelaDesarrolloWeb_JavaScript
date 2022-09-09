const inputPrice = document.querySelector("#treatment");
const inputCoupon = document.querySelector("#cupon");

const btn = document.querySelector("#btn");
btn.addEventListener("click", calcPriceDiscount);

const pResult = document.querySelector("#result");

const coupons = [
	{
		name: "bronze",
		discount: 20,
	},

	{
		name: "silver",
		discount: 30,
	},

	{
		name: "gold",
		discount: 50,
	},
];

function calcPriceDiscount() {
	const price = parseInt(inputPrice.value);
	const coupon = inputCoupon.value;

	if (!price || !coupon) {
		pResult.innerHTML = "Por favor llena el formulario";
		return;
	}

	let discount;

	function isCouponInArray(couponElement) {
		return couponElement.name == coupon;
	}

	const couponInArray = coupons.find(isCouponInArray);

	if (couponInArray) {
		discount = couponInArray.discount;
	} else {
		pResult.innerHTML = "El cupón no es válido";
		return;
	}

	const newPrice = (price * (100 - discount)) / 100;

	pResult.innerHTML = "El nuevo precio con descuento es $ " + newPrice;
}
