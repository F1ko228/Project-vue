<template>
    <div class="container_reg">
        <div class="window_client">
            <div class="window_client_main">
                <div class="window_client_title">
                    РЕГИСТРАЦИЯ
                </div>
                <form class="window_client_form">
                    <p class="window_client_form__title">Введите имя</p>
                    <input class="window_client_form__input" type="text" placeholder="Максим">
                    <p class="window_client_form__title">Введите почту</p>
                    <input class="window_client_form__input" type="text" placeholder="roll123@gmail.com">
                    <p class="window_client_form__title">Введите пароль</p>
                    <input class="window_client_form__input" type="password">
                    <input class="window_client_form__submit registration" type="submit" value="РЕГИСТРАЦИЯ">
                </form>
                <a class="swap" href="/Authorization">ВОЙТИ</a>
            </div>
        </div> <!-- window_client -->
    </div> <!-- container_regAut -->
</template>

<style>
.container_reg {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
}

.window_client {
    width: 600px;
    height: 700px;
    background-color: #067;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.window_client_main {
    width: 600px;
    height: 600px;
    background-color: #067;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.window_client_title {
    cursor: default;
    color: #fff;
    font-size: 40px;
}

.swap {
    text-decoration: none;
    color: #fff;
}

.swap:hover {
    font-weight: 700;
}

.window_client_form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.window_client_form__title {
    color: #fff;
    font-size: 30px;
    margin: 13px 0;
}


.window_client_form__input {
    width: 250px;
    height: 40px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
}

.window_client_form__submit {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 40px;
    font-size: 18px;
}

.window_client_form__submit.registration {
    font-size: 16px;
}

.window_client_form__submit:hover {
    border: .5px solid black;
}

.window_client_form__input:focus {
    outline: none;
}

@media screen and (max-width: 750px) {
    .container_reg {
        height: 100vh;
        width: 100%;
    }
    .window_client {
        width: 400px;
        height: 550px;
    }
    .window_client_main {
        width: 400px;
        height: 550px;
    }
    .window_client_form__submit.registration {
        font-size: 12px;
    }
}

@media screen and (max-width: 450px) {
    .container_reg {
        height: 100vh;
        width: 100%;
    }
    .window_client {
        width: 230px;
        height: 450px;
    }
    .window_client_main {
        width: 230px;
        height: 450px;
    }
    .window_client_title {
        font-size: 25px;
    }
    .window_client_form__title {
        font-size: 20px;
    }
    .window_client_form__input {
        width: 125px;
        height: 29px;
    }

    .window_client_form__submit {
        width: 100px;
        height: 29px;
        font-size: 15px;
    }
}
</style>