const salesTax = (salesData, taxRates) => {
  let totals = salesData.map(company => company.name)
  console.log(totals)
  // for(company of salesData) {
  //   tax = taxRates[company.province]
  //   totals.companyName = company.name
  //   totals.companyName.totalSales = company.sales.reduce((previous, current) => previous + current, 0)
  //   totals.companyName.totalTaxes = company.sales.reduce((previous, current) => previous + current, 0) * tax
  // }
  // console.log(totals)
  }

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

salesTax(companySalesData, salesTaxRates)