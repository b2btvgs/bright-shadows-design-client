const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "bright-shadows-design-api-dev-artworkbucket-i15nf9yhdoy6"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://l702bxynci.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_S35hiiZPX",
    APP_CLIENT_ID: "1b3921bi5mbo3cfhkj6fbtbk4v",
    IDENTITY_POOL_ID: "us-east-2:f4662a4b-24da-4691-b03e-a5fe6caf52e4"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "bright-shadows-design-api-prod-artworkbucket-5f5ic9d1zs2v"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ba9j7ui4c9.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Dg7iQFYsa",
    APP_CLIENT_ID: "1r4a4vpurjemne5foda6lfi3c3",
    IDENTITY_POOL_ID: "us-east-2:53f095bb-3edf-4fce-ad8e-515689f26d02"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
