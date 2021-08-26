import NewsModel from '../models/News.model'

const seed = async () => {
    console.log('start seed')
    await NewsModel.create({
        code: "123",
        title: "Descubra o sabor de rosquinha que melhor te representa!",
        headline: "Food",
        subtitle: "Tantos sabores por aí. Qual melhor exprime sua personalidade?",
        body_text: `Um donut, doughnut, dónute, rosca ou rosquinha é um pequeno bolo em forma de rosca (mais precisamente de toro), popular nos Estados Unidos e de origem incerta. Consiste numa massa açucarada frita, que pode ser coberta com diversos tipos de cobertura doce e colorida, como por exemplo chocolate.

        Nos Estados Unidos e no Canadá, esta designação também pode ser usada para bolas de Berlim, que são conhecidas como "sonhos" no Brasil. Neste caso, em que o bolo tem uma forma esférica, a designação precisa usada nos Estados Unidos é filled doughnut, que significa "donut recheado". Pode ser recheado com geleia ou outros cremes doces. No caso da rosca, a designação precisa é ring doughnut, significando "donut rosca".
        
        Em Portugal, a expressão donut ou dónute designa apenas o bolo em forma de rosca. O bolo esférico corresponde à bola de Berlim;`
    }).catch(error => console.error(error))
}

seed()