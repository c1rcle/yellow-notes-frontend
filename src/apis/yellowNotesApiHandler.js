export default async (restCall, errorPayload) => {
  let response;
  try {
    response = await restCall;
  } catch (e) {
    response = null;
  }

  const isResponseOk = !!response && response.status >= 200 && response.status < 300;

  return isResponseOk
    ? response
    : {
        type: 'ERROR',
        payload: errorPayload
      };
};
