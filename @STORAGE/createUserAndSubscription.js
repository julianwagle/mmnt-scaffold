const fetch = require('node-fetch')
const { gql } = require('@apollo/client')

function createUserAndSubscription() {
    return {
      mutation: gql`
        mutation {
        addUser(input: [
            {
                id: "",
                email: "",
                username: "",
                photoUrl: "",
                role: "",
                auth: {
                    id: "",
                    authd: true,
                    googleId: "",
                    accessToken: "",
                    refreshToken: "",
                },
                subscriptions: [
                    {
                        id: "",
                        stripeSubscriptionId: "",
                        stripeCustomerId: "",
                        stripePriceId: "",
                        trialEnd: "",
                        trialStart: "",
                        active: true,
                    }
                ]
            }
        ]) {
            user {
                id
                email
                username
                photoUrl
                role
                subscriptions {
                    id
                    stripeSubscriptionId
                    stripeCustomerId
                    stripePriceId
                    trialEnd
                    trialStart
                    active
                }
            }
        }
        }

      `,
      variables: rec,
    }
}