package sort;

import org.junit.Test;

import java.util.Arrays;

public class SortDemo {

    /**
     * 两两比较，较大的数下沉，较小的数冒起来。
     */
    @Test
    public void BubbleSort() {
        int[] arr = {42, 20, 17, 13, 28, 14, 23, 15};
        System.out.println(arr.length);

        int temp;//临时变量
        for (int i = 0; i < arr.length - 1; i++) {   //表示趟数，一共arr.length-1次。
            for (int j = arr.length - 1; j > i; j--) {

                if (arr[j] < arr[j - 1]) {
                    System.out.println(j + "：：：：" + arr[j] + ":::::::" + arr[j - 1]);
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    System.out.println(Arrays.toString(arr));
                }
            }
        }

    }

    /**
     * 不断选择最小的值
     */
    @Test
    public void select_sort() {
        int[] array = {42, 20, 17, 13, 28, 14, 23, 15};
        int length = array.length;


        for (int i = 0; i < length - 1; i++) {

            int minIndex = i;
            for (int j = i + 1; j < length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                System.out.println(Arrays.toString(array));

            }
        }
    }

    /**
     * 不断选择最小的值
     */
    @Test
    public void insertion_sort() {
        int[] array = {42, 20, 17, 13, 28, 14, 23, 15};
        int length = array.length;


        for (int i = 0; i < length - 1; i++) {

            int minIndex = i;
            for (int j = i + 1; j < length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                System.out.println(Arrays.toString(array));

            }
        }
    }

}
