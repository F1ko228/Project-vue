<template>
    <div class="container_Aut">
        <div class="window_client">
            <div class="window_client_main">
                <div class="window_client_title">
                    ВХОД
                </div>
                <form class="window_client_form">
                    <p class="window_client_form__title">Введите почту</p>
                    <input class="window_client_form__input" type="text" placeholder="roll123@gmail.com">
                    <p class="window_client_form__title">Введите пароль</p>
                    <input class="window_client_form__input" type="password">
                    <input class="window_client_form__submit registration" type="submit" value="ВОЙТИ">
                </form>
                <a class="swap" href="/Registration">ЗАРЕГЕСТРИРОВАТЬСЯ</a>
            </div>
        </div> <!-- window_client -->
    </div> <!-- container_regAut -->
</template>

<style>
.container_Aut {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
}

.window_client {
    width: 600px;
    height: 600px;
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
}

@media screen and (max-width: 450px) {
    .container_reg {
        height: 100vh;
        width: 100%;
    }
    .window_client {
        width: 200px;
        height: 450px;
    }
    .window_client_main {
        width: 200px;
        height: 450px;
    }
    .window_client_title {
        font-size: 30px;
    }
    .window_client_form__title {
        font-size: 25px;
    }
    .window_client_form__input {
        width: 150px;
        height: 35px;
    }

    .window_client_form__submit {
        width: 130px;
        height: 435px;
        font-size: 15px;
    }
}
</style>