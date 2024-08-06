import React from 'react'

const ContactUs = () => {
  return (
    <section id='contacts' className="flex-col flexCenter overflow-hidden mb-40 px-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Зв'язок із нами</h1>
      <div className='flex flex-col md:flex-row justify-between md:items-start gap-5 w-4/5'>

      <form action="#" className="space-y-8 flex gap-5 items-center flex-col">
        <div className='flex gap-5 flex-row'>
          <div className='flex flex-col gap-1'>
            <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Ваша електронна адреса</label>
                <input type="email" id="email" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-md-light" placeholder="example@gmail.com" required />
            </div>
            <div>
                <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Ваше ім'я</label>
                <input type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-md-light" placeholder="Ваше ім'я" required />
            </div>
          </div>
          <div>
              <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Ваше повідомлення</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
        </div>
        <button type="submit" className="py-3 px-5 text-md font-medium text-center rounded-lg bg-primary-700 md:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
      <div className='w-100 md:w-1/2'>
        <h3>Наше місцезнаходження</h3>
        <iframe
          className="round-md shadow-md "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.4725622111852!2d29.05585421827252!3d50.31387928106633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c8181aac371db%3A0x657e81d2af21e137!2sVolodymyrska%20St%2C%2044%2C%20Korostyshiv%2C%20Zhytomyrs&#39;ka%20oblast%2C%2012501!5e0!3m2!1sen!2sua!4v1710416019230!5m2!1sen!2sua"
          loading="lazy"
          width="100%"
          height={400}
          title='Наше місцезнаходження на карті'
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </div>
    </section>
  )
}

export default ContactUs;