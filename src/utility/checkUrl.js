const checkUrl = url => {
  const regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
  return regexp.test(url);
};

export default checkUrl;
