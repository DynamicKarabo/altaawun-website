// Updated Donation Modal Component with Payment Methods & Zakat
// Replace the donation modal section in OurPrograms.tsx (lines 565-634)

type DonationType = 'general' | 'zakat';
type PaymentMethod = 'payfast' | 'visa' | 'mastercard' | 'paypal';

// Add these state variables after the existing ones:
const [donationType, setDonationType] = useState<DonationType>('general');
const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('payfast');

// Updated Donation Modal JSX:
{isDonateModalOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsDonateModalOpen(false)}>
    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl text-gray-900 font-bold">Make a Donation</h3>
        <button onClick={() => setIsDonateModalOpen(false)} className="text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
      </div>

      {/* Donation Type Selector */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">Choose Donation Type</label>
        <div className="flex gap-3">
          <button
            onClick={() => setDonationType('general')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all font-medium ${
              donationType === 'general'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            💝 General Donation
          </button>
          <button
            onClick={() => setDonationType('zakat')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all font-medium ${
              donationType === 'zakat'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            🕌 Give Zakat
          </button>
        </div>
      </div>

      {/* Zakat Information */}
      {donationType === 'zakat' && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <p className="text-sm text-blue-900">
            <strong>Zakat Calculator:</strong> Zakat is 2.5% of your wealth. Enter your total amount and we'll calculate the Zakat for you.
          </p>
        </div>
      )}

      {/* Amount Selection */}
      <p className="text-gray-600 mb-4 text-sm">Select an amount or enter a custom donation:</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[100, 250, 500].map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount('');
            }}
            className={`py-3 px-4 rounded-lg border-2 transition-all text-sm font-medium ${
              selectedAmount === amount
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            R{amount}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Custom amount (R)"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(e.target.value);
          setSelectedAmount(null);
        }}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-6 focus:border-[#3cb24a] focus:outline-none"
      />

      {/* Zakat Display */}
      {donationType === 'zakat' && selectedAmount && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">Total Amount: <span className="font-bold text-green-600">R{selectedAmount}</span></p>
          <p className="text-sm text-gray-600 mt-1">Zakat (2.5%): <span className="font-bold text-green-600">R{(selectedAmount * 0.025).toFixed(2)}</span></p>
        </div>
      )}

      {donationType === 'zakat' && customAmount && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">Total Amount: <span className="font-bold text-green-600">R{parseFloat(customAmount)}</span></p>
          <p className="text-sm text-gray-600 mt-1">Zakat (2.5%): <span className="font-bold text-green-600">R{(parseFloat(customAmount) * 0.025).toFixed(2)}</span></p>
        </div>
      )}

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">Choose Payment Method</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setPaymentMethod('payfast')}
            className={`py-3 px-3 rounded-lg border-2 transition-all text-sm font-medium flex items-center justify-center gap-2 ${
              paymentMethod === 'payfast'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span>💳 PayFast</span>
          </button>
          <button
            onClick={() => setPaymentMethod('visa')}
            className={`py-3 px-3 rounded-lg border-2 transition-all text-sm font-medium flex items-center justify-center gap-2 ${
              paymentMethod === 'visa'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span>💳 Visa</span>
          </button>
          <button
            onClick={() => setPaymentMethod('mastercard')}
            className={`py-3 px-3 rounded-lg border-2 transition-all text-sm font-medium flex items-center justify-center gap-2 ${
              paymentMethod === 'mastercard'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span>💳 Mastercard</span>
          </button>
          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`py-3 px-3 rounded-lg border-2 transition-all text-sm font-medium flex items-center justify-center gap-2 ${
              paymentMethod === 'paypal'
                ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span>💳 PayPal</span>
          </button>
        </div>
      </div>

      {/* Payment Method Info */}
      <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>Secure Payment:</strong> All transactions are encrypted and processed securely through {paymentMethod === 'payfast' ? 'PayFast' : paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}.
        </p>
      </div>

      {/* Proceed Button */}
      <button
        onClick={() => handleDonateWithPayment(customAmount || selectedAmount, paymentMethod, donationType)}
        className="w-full bg-[#3cb24a] hover:bg-[#2d9138] text-white py-3 px-6 rounded-lg font-medium transition-colors"
      >
        Proceed to Donate
      </button>

      {/* Supported Methods Badge */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">We accept all major payment methods</p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-lg">💳</span>
          <span className="text-lg">🏦</span>
          <span className="text-lg">💰</span>
        </div>
      </div>
    </div>
  </div>
)}

// Add this handler function:
const handleDonateWithPayment = async (
  amount: number | string,
  method: PaymentMethod,
  type: DonationType
) => {
  const donationAmount = parseFloat(String(amount));

  if (!donationAmount || donationAmount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  // Calculate actual donation amount (for Zakat, use the zakat amount)
  const actualAmount = type === 'zakat' ? donationAmount * 0.025 : donationAmount;

  try {
    if (method === 'payfast') {
      // Use PayFast API
      const response = await fetch('/api/payfast-donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: actualAmount,
          donationType: type,
          originalAmount: donationAmount
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Payment processing failed');
        return;
      }

      window.location.href = data.redirectUrl;
    } else {
      // For other payment methods (Visa, Mastercard, PayPal)
      alert(`${method.toUpperCase()} payment integration coming soon!\n\nAmount: R${actualAmount.toFixed(2)}\nType: ${type === 'zakat' ? 'Zakat' : 'General Donation'}`);
      // TODO: Integrate with Stripe, Square, or PayPal
    }
  } catch (error) {
    console.error('Donation error:', error);
    alert('An error occurred. Please try again.');
  } finally {
    setIsDonateModalOpen(false);
  }
};

// Add Give Zakat Button to your UI (e.g., in the CTA section):
// Add this alongside the existing donation buttons:
<button
  onClick={() => {
    setDonationType('zakat');
    setIsDonateModalOpen(true);
  }}
  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#19586d] to-[#3cb24a] text-white rounded-lg hover:shadow-lg transition-all"
>
  <span className="mr-2">🕌</span> Give Zakat
</button>
