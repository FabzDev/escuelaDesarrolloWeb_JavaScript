function moneyBox() {
	let save = 0;
	return addSave;

	function addSave(coins) {
		save = save + coins;
		console.log(`MoneyCoin: $${save}`);
	}
}

const fabioMoneyBox = moneyBox();
const yuliethMoneyBox = moneyBox();

fabioMoneyBox(1115);
fabioMoneyBox(1255);
yuliethMoneyBox(1800);
yuliethMoneyBox(2300);
