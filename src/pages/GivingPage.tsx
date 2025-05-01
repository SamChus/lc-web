

const GivingPage = () => {
       const banks = [
         {
           name: "Guarantee Trust Bank",
           account: "00xxxxx12",
           logo: "GTB",
           color: "bg-orange-500",
         },
         {
           name: "Zenith Bank",
           account: "10xxxxxx03",
           logo: "ZB",
           color: "bg-red-600",
         },
         {
           name: "First Bank",
           account: "20xxxxxx96",
           logo: "FB",
           color: "bg-blue-900",
         },
         {
           name: "Sterling Bank",
           account: "00xxxxxx30",
           logo: "SB",
           color: "bg-red-500",
         },
         {
           name: "Premium Trust Bank",
           account: "08xxxxxx92",
           logo: "PTB",
           color: "bg-gray-800",
         },
         {
           name: "UBA",
           account: "00xxxxxx12",
           logo: "UBA",
           color: "bg-red-700",
         },
       ];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Banking Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <div
                className={`w-12 h-12 ${bank.color} rounded-full flex items-center justify-center text-white font-bold`}
              >
                {bank.logo}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {bank.name}
                </h3>
                <p className="text-gray-600">{bank.account}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GivingPage