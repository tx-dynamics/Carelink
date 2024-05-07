export const IMAGE_BASE_URL = '';
export const GOOGLE_API_KEY = 'AIzaSyD3BToDj_z_1ZLuhdDSURQplj3_9IgQSis';
export const STRIPE_KEY =
  'pk_test_51M2CrcHHGQaeuSZJ0QIFmLMBMFwZTssg5cqF5VwIvPdUrJa4jPCxpgzZE3DGvvuqt7J0ERdzlelDWPEpA5i9erRt00k7gvsN58';
// export const STRIPE_SECRET_KEY = '';
export const DUMMY_IMAGE =
  'https://divet-bucket.s3.us-east-2.amazonaws.com/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png';
export const BASE_URL =
  'http://ec2-18-218-211-31.us-east-2.compute.amazonaws.com/'; // Development
// export const BASE_URL = 'https://47d4-103-147-42-98.ngrok-free.app/'; // Ngrok Link

export const api = {
  login: 'api/v1/user/login',
  signUp: 'api/v1/user/signup',
  logout: 'api/v1/user/logout',
  verifyUserEmail: 'api/v1/user/verify',
  termsAndConditions: 'api/v1/termsandcondition',
  privacyPolicy: 'api/v1/privacy',
  userProfile: 'api/v1/user/updateProfile',
  forgotPassword: 'api/v1/user/forgotpassword',
  resendOTP: 'api/v1/user/sendOTP',
  verifyForgotPasswordOTP: 'api/v1/user/verifyOTPResetPassword',
  forgetResetPassword: 'api/v1/user/resetPassword',
  getUserProfile: 'api/v1/user',
  get_subscription: 'api/v1/user/subscription',
  createIntent: 'api/v1/user/subscription',
  getAgencyProfile: 'api/v1/user/me',

  // listing routes
  getListing: 'api/v1/listing',
  createListing: 'api/v1/listing',

  // proposals
  createProposal: 'api/v1/proposal',
  getProposal: 'api/v1/proposal',

  // liked listings
  likeList: 'api/v1/listingLike',
};
