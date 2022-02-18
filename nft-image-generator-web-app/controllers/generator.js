const sharp = require('sharp');
const body = require('../enums/body');
const imageCounts = require('../enums/imageCounts');
const path = require('../enums/path');
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');

const generateImage = ((req, res) => {
    if (!existsSync('./public/images/nft')) {
        mkdirSync('./public/images/nft');
    }

    let count = req.body.count || 1;

    res.status(200).json(JSON.stringify({ id: calculator(count) + '.png' }))
})

const calculator = (count) => {
    for (let i = 0; i < count; i++) {
        let key = generator();
        return key;
    }
}

const generator = () => {
    const key = [rand(imageCounts.bg), rand(imageCounts.head), rand(imageCounts.hair), rand(imageCounts.eyes), rand(imageCounts.nose), rand(imageCounts.mouth)].join('');

    try {
        let fullPath = path.img + '/' + key + '.png';
        if (!existsSync(fullPath)) {

            const converted = body
                .replace('-background-', setLayer('bg' + key[0]))
                .replace('-head-', setLayer('head' + key[1]))
                .replace('-eyes-', setLayer('eyes' + key[2]))
                .replace('-nose-', setLayer('nose' + key[3]))
                .replace('-mouth-', setLayer('mouth' + key[4]))

            writeFileSync(`${path.img}/${key}.svg`, converted)
            generatePNG(key)
        }

        return key;

    } catch (err) {
        console.error(err)
    }
}

function rand(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setLayer(name) {
    try {
        const svg = readFileSync(`${path.layers}/${name}.svg`, 'utf-8');
        const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g
        const layer = svg.match(re)[0];

        return layer
    } catch (err) {
        console.error(err)
    }
}

async function generatePNG(name) {
    const src = `${path.img}/${name}.svg`;
    const dest = `${path.img}/${name}.png`;

    const img = await sharp(src);
    const resized = await img.resize(1024);
    await resized.toFile(dest);
}

module.exports = {
    generateImage
}