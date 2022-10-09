import React from 'react'

export default function IntroForm() {
  return (
    <div className='flex-1 bg-sky-700 flex flex-col items-center justify-center relative min-h-[80vh] lg:h-auto' data-testid="intro-form">
        <h1 className='text-xl lg:text-2xl font-semibold text-slate-200 absolute top-7 left-16'>Envelope</h1>
        <section className='space-y-10 w-4/5 text-center leading-7'>
            <h1 className='text-4xl lg:text-5xl font-bold  text-white'>Introducing our <br/>2020 report</h1>
            <p className='text-white text-sm lg:text-base sm:px-10 lg:px-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tempora sit beatae doloremque quaerat.dipisicing elit. Totam tempora sit beatae doloremque quaerat.</p>
            <button className='px-10 py-3 rounded-lg border-slate-200 border-2 text-white cursor-pointer'>
                <p>
                View Report
                <img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/50/FFFFFF/external-share-user-interface-anggara-glyph-anggara-putra-4.png" 
                className='w-5 h-5 inline-flex ml-3'
                alt='report-logo'
                />
                </p>
            </button>
        </section>
    </div>
  )
}
