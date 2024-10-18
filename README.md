# An AWS CDK app that deploys a simple web app stack. Keycloak & the app of your choosing.

Keycloak is an easy way to secure your app with OAuth/SSO. Here's an easy way to deploy it.

## Steps

1. Copy the .env.example to .env at the root
2. Specify AWS_ACCOUNT and AWS_REGION if different than the defaults in your aws cli, or delete them to use the defaults
3. Modify the Keycloak specific environment variables
4. Run `cdk synth && cdk deploy`

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
