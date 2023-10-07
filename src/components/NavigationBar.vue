<template>
    <nav class="navigation">
        <div class="navigation__item1">
            <a href="#"><img class="navigation_logo" src="../assets/logo.png" alt="Логотип"></a>
        </div>
        <div class="navigation__item2">
            <ul class="navigation__item2_list">
                <a href="/Catalog"><li>КАТАЛОГ ТОВАРОВ</li></a>
                <a href="/Orders"><li>ОФОРМЛЕННЫЕ ЗАКАЗЫ</li></a>
                <a href="/Basket"><li>КОРЗИНА</li></a>
            </ul>
        </div>
        <div class="navigation__item3">
            <a href="/Authorization"><button class="button">ВОЙТИ</button></a>
        </div>
    </nav>
</template>

<script>
    export default {
        components: {
        }
    }
</script>

<style>
.navigation {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation_logo {
    width: 50px;
    height: 50px;
}

.navigation__item2_list {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style-type: none;
}

.navigation__item2_list > a {
    color: #000;
    transition: .4s;
    cursor: default;
    font-weight: 500;
    text-decoration: none;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: #067;
    color: #fff;
    border-radius: 10px;
    border: none;
    transition: .4s;
}

.navigation__item2_list > a:hover {
    color: #067;
}

.button:hover {
    border: .5px solid #fff
}

.navigation__item3 a {
    text-decoration: none;
}

@media screen and (max-width: 830px) {
    .navigation_logo {
        width: 35px;
        height: 35px;
    }
    .navigation__item2_list > a {
        font-size: 12px;
    }
    .button {
        width: 70px;
        height: 25px;
        font-size: 10px;
    }
}

@media screen and (max-width: 600px) {
    .navigation_logo {
        width: 10px;
        height: 10px;
    }
    .navigation__item2_list > a {
        font-size: 8px;
    }
    .button {
        width: 40px;
        height: 15px;
        font-size: 7px;
    }
}

@media screen and (max-width: 425px) {
    .navigation_logo {
        width: 10px;
        height: 10px;
    }
    .navigation__item2_list > a {
        font-size: 7px;
    }
    .button {
        width: 40px;
        height: 15px;
        font-size: 7px;
    }
}
</style>