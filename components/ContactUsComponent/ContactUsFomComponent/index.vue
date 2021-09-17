<template>
  <div class="contact-form">
    <h4>Обратная связь</h4>
    <form action="#" method="post">
      <input type="text" placeholder="ФИО" required="">
      <input type="email" placeholder="Email" required="">
      <input type="text" placeholder="Телефон" required="">
      <textarea placeholder="Сообщение" required=""></textarea>
      <button class="btn1 hvr-sweep-to-bottom">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUsFormComponent"
}
</script>

<style scoped>

</style>
