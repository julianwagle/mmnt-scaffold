export default function getGradient () {
    var gradients = [
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F1.png?alt=media&token=4c71bf44-a6b5-465d-b4ae-4366b3dccc5a",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F4.png?alt=media&token=389761f4-cd2c-4fec-8ab0-7d136e149c8e",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F13.png?alt=media&token=aa3f22ee-84bd-410f-9b31-dd7ccb3ac396",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F20.png?alt=media&token=498c8f26-c816-4c73-b715-a0a76203990c",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F8.png?alt=media&token=8f4526e8-1349-42ba-86ae-1a881154d8d7",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F11.png?alt=media&token=2b8108dd-8ee1-4626-a770-f977ca8d763e",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F17.png?alt=media&token=3c4aaa65-ec27-42bf-8425-6f02137a7ed4",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F5.png?alt=media&token=8d473644-5237-4a4b-bf25-144d9a99d0c3",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F2.png?alt=media&token=40179130-2673-43f6-a66a-411e2f726708",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F6.png?alt=media&token=bad1b8a3-f0db-4912-b83b-04498caffb8f",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F7.png?alt=media&token=c4743ce7-35a0-4c7e-9f1d-216a14070a91",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F3.png?alt=media&token=d60dfeea-2e73-46cd-9cd6-e51e140b2615",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F15.png?alt=media&token=88150368-106f-4a58-bcd4-6c050e6528be",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F16.png?alt=media&token=b76274dd-b234-42b8-804c-0f90e20b9e67",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F14.png?alt=media&token=f65235a4-5356-4a4a-b7f8-a12b6d09f852",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F10.png?alt=media&token=5b9d909d-e95d-4b95-93be-f168984c0ef0",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F21.png?alt=media&token=4f0a9e5b-fe8b-423f-a2ea-51258c682776",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F27.png?alt=media&token=802a56cf-4036-4361-aea3-4f472948bec2",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F22.png?alt=media&token=a7a90b1e-56eb-4077-9b66-cb8fbb0b34d3",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F12.png?alt=media&token=c7ff9953-9164-417a-a445-2d5690b75fa2",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F18.png?alt=media&token=74fe2ffa-49b2-455f-8c50-c69c54829f2a",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F28.png?alt=media&token=e66afd4b-cb16-4a2f-b0db-0c66dc95133d",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F26.png?alt=media&token=b097c241-a05e-4dd2-811c-6ee15d8ce180",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F37.png?alt=media&token=c4570083-2f1b-4b4b-88b2-b38dcb19a8e6",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F24.png?alt=media&token=92a3f5c9-bce4-47c3-a033-71acfa92d5f4",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F23.png?alt=media&token=e9bfe349-3a5b-4ad9-b0a5-fca88186283a",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F25.png?alt=media&token=32f71ca3-cd37-4adf-ab32-153a4fc8a56a",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F33.png?alt=media&token=76f7107c-8ef7-4498-992e-3117e170fc86",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F9.png?alt=media&token=7719f777-a2e7-4c20-ab82-a5f63b7ed3a5",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F19.png?alt=media&token=525a45d8-a976-40aa-8ecc-29b7bb9254b1",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F34.png?alt=media&token=36c5e40d-c6a7-4775-98fd-9e172154979f",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F35.png?alt=media&token=a34b157e-516a-4b7c-9fd0-c4a6e050501b",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F29.png?alt=media&token=3625fb51-d383-4130-864f-d5d53bb4d15c",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F30.png?alt=media&token=675f7c9d-8304-4627-960a-34b0950a855f",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F31.png?alt=media&token=a6c53e56-a267-49cb-a3e1-2051007945cc",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F32.png?alt=media&token=81b29a66-63de-4cbd-a206-e3789bd93009",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F36.png?alt=media&token=4c88d439-1744-4e81-a338-ddeb4d0a08ee",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F39.png?alt=media&token=f0b38c47-9557-4103-a0fe-d69500ffa530",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F38.png?alt=media&token=bae40651-9495-4fc7-b8a8-b2d1a62269a1",
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/profile-gradients%2F40.png?alt=media&token=a9cd8cd5-617b-4ccf-9ce6-d7cb6948d72e"
    ]
    var i = Math.floor(Math.random() * (gradients.length - 1) + 1)
    var g = gradients[i]
    return g
}

