import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import { Order, OrderItem } from "./order.model";
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions } from "@angular/http";

import { MEAT_API } from 'app/app.api'

@Injectable()
export class OrderService {


    constructor(private cartService: ShoppingCartService, private http: Http) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increasyQty(item)
    }
    decreaseQty(item: CartItem) {
        this.cartService.decreasyQty(item)
    }
    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }
    checkOrder(order: Order): Observable<string> {
        // CRIA UMA VARIÁVEL QUE RECEBE O HEADER QUE O PROTOCOLO HTTP EXIGE NA PASSAGEM POR POST
        const headers = new Headers()
        //ADICIONA O TIPO QUE O BACK-END IRÁ RECEBER QUE NESTE CASO É UM JSON
        headers.append('Content-type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
    }

    clear() {
        this.cartService.clear()
    }
}