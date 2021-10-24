const linksSocialMedia = {
  /* objeto declarado, lembrar de separar por vírgulas*/
  github: 'riyuujin',
  youtube: 'channel/UCrWkGVml8QMcaCUC6bf_1_w',
  facebook: 'mauricio.bortoli',
  instagram: 'mauriciobtli',
  twitter: 'MaurcioBortoli3'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/* arrowfunction serve para contrair as funções */
/* posso usar quantos .then() eu quiser */
