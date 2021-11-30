module.exports.getData = async (data, res) => {
  console.log(data);
  const data_ref = [
    {
      ref_id: "1234567891234",
      first_name: "Tu",
      last_name: "Ocha kuy",
      phone: "0123456789",
    },
    {
      ref_id: "1111111111111",
      first_name: "Spay",
      last_name: "Zing",
      phone: "0222222222",
    },
    {
      ref_id: "1200100100102",
      first_name: "Ohe",
      last_name: "teepungkorn",
      date_of_birth: "2021-11-25",
      email: "teepungkorn@clicknext.com",
      terms_conditions_accepted: true,
      phone: "0871506083",
    },
    {
      ref_id: "1200100100",
      phone: "0877777777",
      date_of_birth: "2021-11-25",
      email: "tao_test@clicknext.com",
      terms_conditions_accepted: true,
      first_name: "tao_test",
      last_name: "tao_test",
    },
  ];
  // console.log(data.ref_id+"  : "+data.phone);
  let dat_result;
  for (let index = 0; index < data_ref.length; index++) {
    if (
      data_ref[index].ref_id == data.ref_id &&
      data_ref[index].phone == data.phone
    ) {
      dat_result = result = {
        ref_id: data_ref[index].ref_id,
        first_name: data_ref[index].first_name,
        last_name: data_ref[index].last_name,
        phone: data_ref[index].phone,
      };
      break;
    }
  }
  if (dat_result) {
    return dat_result;
  } else {
    return { message: null };
  }
};
