function hasQuota() {

  const emailQuotaRemaining = MailApp.getRemainingDailyQuota();

  if (emailQuotaRemaining > 0) {
    Logger.log(`Stil have some quota. Remaining email quota: ${emailQuotaRemaining}`);
    return true;

  } else {
    Logger.log(`There is no more quota. Remaining email quota: ${emailQuotaRemaining}`);
    return false;
  }

}