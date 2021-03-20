document.querySelectorAll('.btn #delete').forEach(element => {
  element.addEventListener('click', () => {
    alert('確定要刪除嗎?')
  })
})
