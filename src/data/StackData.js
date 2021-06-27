const STACK_DATA=[
    {name:'Mongo Data Base' ,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFNy-aRKl7FQ2G_Ceyhyua0-ta1Uzp4JWbQ&usqp=CAU'
    ,type:'mongo'
    },
    {name:'React Js' ,
    img:'data:image/png;base64,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'
    ,type:'react'
   },
   {name:'Express JS',
   img:'data:image/png;base64,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'
   ,type:'express'
    },
   {
       name:'Node JS',
       img:'data:image/png;base64,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'
     ,type:'node'
    },
   {
       name:'HTML5',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhhUKEb8FA2CRNAP3PhI_fuYYgRQoj6rwKQ&usqp=CAU'
   ,type:'html'
    },
   {
       name:'Java Script',
       img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEX33x4AAAD/6R/z3h5XTgr84x//5x//6yD64R7/6B9rZQ3/7CDr2R3ayhv55R+YjhOroBWKghF6cw+0qBZeWQykmRRnYQ3QwRo+PAiCexDDsxg5Nwfn1h3KuxmelBTi0BxWUgtxaw4KCwGRiRIiIQQpKAVQTAoxMAYJCQF9eRAtKgUREgJKRgk1MgYeHAS8rxcWGANEQQnULI4EAAAIZklEQVR4nO2da2OiOhCGSTgJQQFRxFsV6tp2t9vtsf7/P3fUdlsvZHLhYtKT5zMKviYzyWRm8DyHw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOx/8VtufWz2AKjBDaD/xoWZZlFPm4jwmxUhzKRelrGAlxnG0mP3+hv/x6HD/nKx9bp4s/7lUzGcqLwki/zMeomt/zbUJJiz+hcXzOL0HoCUt+BcNR8Zv7NUcmC2yRKnxN/pHThAXxBBbkyEuRWKNKXU1wfC+hyJFBaIkq9TQh/lpWkcNYWQTt/6AGqKUJ3ioocqBnxQSqoQkL14qSIPQjVnPxN0FfExIJnE01maw7ux3ampBSR5E9hfGi6GqiLQlCG9MtraYmbKktyd4pGy6KnibMf6mhCcrMNrR6muA/dSRBaGq0S9bSJNzUkwShyOS9so4mLK4rCZqZbFJ0NMGvtTVBA4NNioYmJK0vCUKxubNHQ5PkRxOa3Jk7e9Q1aWaYIJQa63vUNQn+bUaT38au8ZU1YatmJBmEHf9SeZQ1oWvBj53N8yzL8jkYf9stv5PfCWFFiigg7+BkwQ3Upthcr6OuCZtCisyT08McEpSVe4BxZKx5PaKqCYGW9dvLj7B+XnFVYPIg8dQ1wU98Saq2u/TSJK/ND8mqagKYk3XlKoycTbaXlblLtU8UNYFiSX71HehJcH9oxRGPqib81cmI513x/OOK19jcNckpipoQ/onOgjsEwvcAf2G0Az5BVZMKP/JBxL3HMd7yx+RV2jmqmgy41wPGE49QaroDPqE5TfrAXSJ7BonXlSaePYPEa1ITjiu2EFVNCu71U6vGAoSqJhn3+oENyzEpVNdsC+71jxas2uVQ1QQIFWy/y0BR3QPyr99b2W9iUZRjBYAms/B7iKKsCRRm3ZkfG5Gh0TgberNk5wujrAnf8RzZWBEhgVGO2yewJujN+HCrEPWzDF6twSevViXXV6Csicxx8d02sFkV9fNi0eQ58pIn1NoppK4JHcmIgtC8tHUKqWvCpDNjx6u+lapo5ORgmXqddx5SG6eQhiZq+cLDpS3h+k90cvzonPuhKiaxZV5IKz9WNaPtaWWVKlqaEDDhoorZwiJV9HLLQ36omsduZc2aX7Muoy/vez75E1tibXXrd8Kduiho5FsxgXQ1Ycmdhigot2ECade+aYoyK80/JdWvkWRUutr6jML4oVKnvjiQ3A1e8GR6fL9WzXXAPxUEMbzIuGZtfqlVY2x4kXHNHg4sHGqJsgEzM25M7V4fYazlf4YGny7X1sRjgVZBz9Dc6VNfk71VSXQmUGHs8VgTmngejTTc8srUhX4zmuxt7fJZWRRTi4wb0uSwrPVVK7F3htrZxjTxDnYlfVASJTdz9jSpyaGKaaW0CTIzV7JZTY61XQoR7JGRvqdpTQ6GJcmlp9DSRDPbvCZ7CF5INgOZm7gbbEWTwxSK11KiJI39kuZoSZPjikVmHZcZ6Hpa0+RgWCKxub03cNvToiZHVXoiUQycPK1qcuijOhX4oIV5nqdlTfbWVtABcWieQWldE8/rg/GVnXkGpQNNPAyGss0zKF1o4mEo5mTeUrYTTbzgka+JeaGlbjSBMtLNW7V1o4kX8DObim+lCUmkTQHlRyaNqyNkEfdZx4LYBsOpvH0EMtLn3WtCwN04kAA8hj+Ip68IPclGVIF+GM9da8LwAoxlAe0se9Cz0ug9eSuXjH8AtZWjjjWh0RguhgZqY4H/jySfOX6l3OwBNOl2nBB8fHSoLynQu2PDe1bW3351GX6QW4YCfVO63PAwvProQpjyBzhQZME7aMDxWVxxLGVSgDLCDn0xib7SNfmJQQF/J19dQk39SxXnMqIE/DyVzg55CD5ttsD9L6G6kyozRIKKuSaRSwIlXncVQMHT8w0Gb/ZAlbHX51EsWFXuW8S5JP0Z/z7dNNcl/lXEj+MegDq2l6tlLF3yyiPXggTpkN8hpJtYAcNVvqTSpEB7+MtlLEmAMXUHdnAModevvHYQU8LTn1W3fqt4agK1gr3YhjBBimPKrbtgVTboi/aX9sBLgqaXf0gIVpxchDWgfhZH7qprdBj14XKFtjuEHLZlfOb+SW0eA+cCuprmwOLuL7MsoefvvWMER6KklJZTC5goBXE+TTClhIY4mQpS0K52xVimtquXLfd3eO+pSzEuM2HmRdtnXjKtomfr0Wg0rjQ5Z1x1FZfuQ71bD4s8Lzajp1/ii9uPsgV6VQFVXA9phRJaBVr3xA28yOKDScWQFppZDRReVqkL1quUuKYqmA66bk26SH1s6L+8q7R8gV5uPUAnKTlATzkVttV/H9SMWotuzgADYcsWCbjv90jUcj1FdHW008RbT7jRSiDMr8F9VznDpL7vGQEV6PqvwLumu+xYWtekvEGzvEFR4g4DsYF64fz5s4L+kSxrvQbvC35P7zYAUxuEiF7ex3ytwq6r23ScQt2vIcpAuCljVJi4Z54k++kj3tlzkHoZKJyNJcPqBvnToaAFIQ/Jl8bSEgg6i3ksb5JLQJbieMA1Vy+L4SEIKMKMbtV3iqlb2rulwt9HorWeIg+3fLVKGKsN8IFayxaGY519RHHbTnYs2MrvT3qRstljssUXXwxu3xWG4ExurPT0+vqwMCqAlMYLfqZm9CEmwVQYZ3oYRNqdpBnB06HMaHwZxub0f2Q0XD3zn3o3iANSyw8w0o8LeBl3X+wFMSs3mJB+tN1MLoV5XRerpKYg7zBC+2U26F37/3/v52kchIYJ8g4jJMSJHy8W2yzNssUq9pOANvmo+zvQIPHK6WKbpnmep9vFdJlgTIzU4wRG2PFAirG2HnT/zeQvrd3E4XA4HA6Hw+FwOBwOh8PhcDgcTfEfB/x2WOvv1wsAAAAASUVORK5CYII='
       ,type:'js'
    },
   {
       name:'CSS',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx7XTQ7MTF9U8Hva4Q-9x_z4WRrthi4t91w&usqp=CAU'
      , type:'css'
    },
   {
       name:'DSA',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8S8Alc5Uv1K6qrrJB6MP9RMq3aMjU5uXShg&usqp=CAU'
      , type:'dsa'
    }
]

export {STACK_DATA}