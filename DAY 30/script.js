document.addEventListener('DOMContentLoaded', () => {
    const denominations = [500, 200, 100, 50, 20, 10];
    const inputs = denominations.map(d => document.getElementById(`et${d}`));
    const texts = denominations.map(d => document.getElementById(`txt${d}`));
    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const raw = parseInt(input.value, 10);
            if (isNaN(raw) || raw < 0) {
                input.value = '';
            }
            calculateRow(index);
            calculateGrandTotal();
        });
    });

    btnReset.addEventListener('click', resetAll);

    function calculateRow(index) {
        const count = parseInt(inputs[index].value, 10) || 0;
        const subtotal = count * denominations[index];
        texts[index].textContent = '\u20B9' + subtotal.toLocaleString('en-IN');
    }

    function calculateGrandTotal() {
        let total = 0;
        inputs.forEach((input, index) => {
            const count = parseInt(input.value, 10) || 0;
            total += count * denominations[index];
        });

        txtFinalCash.textContent = '\u20B9' + total.toLocaleString('en-IN');
        txtFinalCashInWords.textContent = total === 0 ? 'Zero Rupees Only' : `${numberToWords(total)} Rupees Only`;
    }

    function resetAll() {
        inputs.forEach((input, index) => {
            input.value = '';
            texts[index].textContent = '\u20B90';
        });
        txtFinalCash.textContent = '\u20B90';
        txtFinalCashInWords.textContent = 'Zero Rupees Only';
    }

    function numberToWords(number) {
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

        if (number === 0) return 'Zero';

        let words = '';

        if (Math.floor(number / 10000000) > 0) {
            words += numberToWords(Math.floor(number / 10000000)) + ' Crore ';
            number %= 10000000;
        }

        if (Math.floor(number / 100000) > 0) {
            words += numberToWords(Math.floor(number / 100000)) + ' Lakh ';
            number %= 100000;
        }

        if (Math.floor(number / 1000) > 0) {
            words += numberToWords(Math.floor(number / 1000)) + ' Thousand ';
            number %= 1000;
        }

        if (Math.floor(number / 100) > 0) {
            words += numberToWords(Math.floor(number / 100)) + ' Hundred ';
            number %= 100;
        }

        if (number > 0) {
            if (number < 10) {
                words += units[number];
            } else if (number < 20) {
                words += teens[number - 10];
            } else {
                words += tens[Math.floor(number / 10)];
                if (number % 10 > 0) {
                    words += ' ' + units[number % 10];
                }
            }
        }

        return words.trim();
    }
});
