/**
 *
 * @param {String} cardNumber
 */
const creditCardMask = (cardNumber) => {
  try {
    if (!isValidCardNumber(cardNumber)) 
        throw new Error("16 digits are required");

    return cardNumber
            .replace(
                /^[\d-\s]+(?=\d{4})/, 
                "************"
            );
  } catch (error) {
    console.error(error.message);
  }
};

/**
 *
 * @param {String} cardNumber
 * @returns
 */
const isValidCardNumber = (cardNumber) => {
    return cardNumber 
            && cardNumber.length === 16 
            && cardNumber.length > 0;
}

creditCardMask("123456789098765")
