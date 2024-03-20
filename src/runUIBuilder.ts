//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.buttons('', ['Show loading'], () => {
        uiBuilder.showLoading('Loading...');
        setTimeout(() => {
            uiBuilder.hideLoading();
        }, 1000);
    });
}