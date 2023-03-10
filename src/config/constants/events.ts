import {SpendCategoryTypes} from './parameters';

export enum Events {
  REGISTER = 'web_bk_register_button',
  LOGIN_GOOGLE = 'web_bk_login_google',
  LOGIN_PHONE_COMPLETED = 'web_bk_login_phone_completed',
  LOGIN_WITH_PHONE = 'web_bk_login_phone',
  ON_BOARDING = 'web_bk_onboarding_confirmed',
  REGISTER_CONFIRMED = 'web_bk_register_button_confirmed',
  REGISTER_INVALID_PHONE = 'web_bk_register_invalid_phone',
  REGISTER_REDIRECT_LOGIN = 'web_bk_redirect_login',
  REGISTER_AGREE_TERMS = 'web_bk_agree_terms',
  LOGIN_USER_NOT_FOUND = 'web_bk_login_user_not_found',
  OTP_OK = 'web_bk_otp_ok',
  OTP_RESEND = 'web_bk_resend_otp',
  OTP_LIMIT = 'web_bk_otp_limit',
  CTA_ALERT = 'web_bk_cta_alert',
  INVENTORY_ADD_PRODUCTS = 'web_bk_inventory_add_products',
  INVENTORY_ITEM_STARTED = 'web_bk_inventory_item_started',
  INVENTORY_CREATE_ITEM_COMPLETED = 'web_bk_inventory_item_completed',
  INVENTORY_UPLOAD_STARTED = 'web_bk_inventory_mu_started',
  INVENTORY_MASSIVELY_UPLOAD_FIX_ERRORS = 'web_bk_inventory_massively_upload_fix_errors',
  INVENTORY_MASSIVELY_UPLOAD_FILE = 'web_bk_inventory_mu_upload_file',
  INVENTORY_MASSIVELY_UPLOAD_ADD_PRODUCTS = 'web_bk_inventory_mu_add ',
  INVENTORY_MASSIVELY_UPLOAD_CONTINUE_WITH_ERRORS = 'web_bk_inventory_mu_continue_with_errors',
  INVENTORY_MASSIVELY_UPLOAD_EXISTING_PRODUCTS = 'web_bk_inventory_mu_existing_products',
  INVENTORY_MASSIVELY_UPLOAD_REPLACE_PRODUCTS = 'web_bk_inventory_mu_replace',
  INVENTORY_MASSIVELY_UPLOAD_INVALID_FORMAT = 'web_bk_inventory_mu_invalid_file',
  INVENTORY_MASSIVELY_UPLOAD_SUCCESSFUL = 'web_bk_inventory_mu_successful_file',
  INVENTORY_MASSIVELY_UPLOAD_COMPLETED = 'web_bk_inventory_mu_completed',
  INVENTORY_MASSIVELY_UPLOAD_SAVE_FAILED = 'web_bk_inventory_mu_save_failed',
  INVENTORY_MASSIVELY_UPLOAD_VERIFY_FAILED = 'web_bk_inventory_mu_verify_failed',
  INVENTORY_MASSIVELY_UPLOAD_DOWNLOAD_TEMPLATE = 'web_bk_inventory_mu_template',
  INVENTORY_BALANCE_DOWNLOAD_REPORT = 'web_bk_reports_downloaded',
  INVENTORY_MASSIVELY_UPLOAD_CONTINUE_REVIEW = 'web_bk_inventory_mu_continue_review',
  INVENTORY_MASSIVELY_UPLOAD_FILE_ERRORS = 'web_bk_inventory_mu_file_errors',
  WEB_APP_ANDROID_PAGE = 'web_bk_web_app_android',
  WEB_APP_ANDROID_DOWNLOAD = 'web_bk_web_app_download',
  WEB_APP_IOS_PAGE = 'web_bk_web_ios_page',
  INVENTORY_PRODUCTS_SORT = 'web_bk_inventory_sort',
  SHOP_WEBBOOK_DELIVERY = 'shop_webbook_delivery',
  INVENTORY_MASSIVELY_UPLOAD_INVENTORY_DOWNLOAD = 'web_bk_inventory_mu_download',
  BALANCE_EXPENSE_STARTED = 'web_bk_balance_expense_started',
  BALANCE_EXPENSE_COMPLETED = 'web_bk_balance_expense_completed',
  BALANCE_SALE_STARTED = 'web_bk_balance_sale_started',
  BALANCE_CART = 'web_bk_balance_cart',
  BALANCE_SALE_SUMMARY = 'web_bk_balance_venta_summary',
  BALANCE_SALE_COMPLETED = 'web_bk_balance_sale_completed',
  BALANCE_RECEIPT = 'web_bk_balance_receipt',
  BALANCE_SALE_AFTER = 'web_bk_balance_sale_after',
  BALANCE_TRANSACTION_COMPLETED = 'web_bk_balance_transaction_completed',
  EXTRA_INCOME_ALL = 'web_bk_ingresos_extra',
}

export const EventsAdjustExpense = {
  [SpendCategoryTypes.ADMINISTRATIVE_EXPENSES]: 'admin_costs',
  [SpendCategoryTypes.ADVERTISING]: 'marketing',
  [SpendCategoryTypes.FURNITURE_OR_MACHINERY]: 'furniture_equipment',
  [SpendCategoryTypes.MAINTENANCE]: 'repairs',
  [SpendCategoryTypes.OTHERS]: 'others',
  [SpendCategoryTypes.PAYROLL]: 'salaries',
  [SpendCategoryTypes.PUBLIC_SERVICES]: 'public_services',
  [SpendCategoryTypes.PURCHASE_PRODUCTS]: 'inventory_purchase',
  [SpendCategoryTypes.RENT]: 'rent',
  [SpendCategoryTypes.TRANSPORT]: 'logistics',
};
