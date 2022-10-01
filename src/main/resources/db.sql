INSERT INTO utente(id, email,name) VALUES (1, 'alanliu155@gmail.com','Alan');
INSERT INTO public.cart(id, utente_id) VALUES (1, 1);
INSERT INTO public.product(id,description, image, title, price)
VALUES (1,'un pleisteiscion.', 'controller.png', 'PS4', 32.5);
INSERT INTO public.cart_items(id,quantity, cart_id, product_id)
VALUES (1,1, 1, 1);
select * from cart_items
join product on product.id= cart_items.product_id;

