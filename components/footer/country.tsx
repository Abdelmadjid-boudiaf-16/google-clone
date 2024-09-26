const Country = async () => {
  const country = await fetch(`https://api.miip.my`)
    .then((res) => res.json())
    .then((data) => {
      return data.country;
    });

  if (!country) return <div>United State</div>;
  return <div>{country}</div>;
};

export default Country;
