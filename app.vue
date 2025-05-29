<script setup>
const GOOGLE_AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
const GOOGLE_REDIRECT_URI = "http://localhost:3000/google_login";
const GOOGLE_CLIENT_ID =
  "984573800214-8jje5dmho5s1actj4m2chkisajkuitle.apps.googleusercontent.com";

// Разрешения которые берем у пользователя
const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/gmail.send" // Не забываем добавить разрешение
];

const uri = `${GOOGLE_AUTH_URI}
?redirect_uri=${GOOGLE_REDIRECT_URI}
&response_type=code
&client_id=${GOOGLE_CLIENT_ID}
&scope=${GOOGLE_SCOPES.join(" ")}
`;
</script>
<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>

<UNotification />
</template>
