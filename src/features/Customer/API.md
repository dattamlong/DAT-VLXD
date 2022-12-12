# API VẬT LIỆU XÂY DỰNG

## `API: Người tiêu dùng`

### `1. Lấy list sản phẩm hiện ra cho người dùng`

```javascript
METHOD: GET
URL: `${API_URL}/product`
REQ: NULL
RES: {
    STATUS: 'OK' | 'NOK',
    MSG: NULL | 'MSG ERROR',
    DATA: [
        {
            id: 'STRING',
            name: 'STRING',
            price: 'INT',
            salePrice: 'INT',
            imageUrl: 'STRING',
        }
        ...
    ]
}
```

### `2. Lấy thông tin từng sản phẩm`

```javascript
METHOD: GET
URL: `${API_URL}/product/${ID_PRODUCT}`
REQ: NULL
RES: {
    STATUS: 'OK' | 'NOK',
    MSG: NULL | 'MSG ERROR',
    DATA:{
        id: 'STRING',
        name: 'STRING',
        price: 'INT',
        salePrice: 'INT',
        imageUrl: 'STRING'
    }

}
```
