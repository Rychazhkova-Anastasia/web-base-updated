/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export async function getData(): Promise<number[]> {
    const p1 = mock(100);
    const p2 = mock(200);
    const p3 = mock(300);

    const results = await Promise.all([p1, p2, p3]);

    return results;
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
        return String(err);
    }
}
