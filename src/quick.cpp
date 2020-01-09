//Quicksort but inefficient, runs into multiple of the same arrays
#include<iostream>
using namespace std;

void printarr(int keep[]){
       for(int i=0; i<10; i++)
    {
        cout << keep[i] << " ";
    }
    cout << endl;
};

void swap(int keep[], int a, int b){
    int temp=keep[a];
    keep[a]=keep[b];
    keep[b]=temp;
    printarr(keep);
};

int partition(int keep[], int low, int high){
    int pivot=keep[high];
    int i=low;
    for(int j=low; j<high; j++){
        if(keep[j]<=pivot){
            swap(keep, i, j);
            i++;
        }
    }
    swap(keep, i, high);
    return i;
};


void quicksort(int keep[], int low, int high){
    if(low < high){
        int p=partition(keep, low, high);
        quicksort(keep, low, p-1);
        quicksort(keep, p+1, high);
    }
};

int main(){
    int keep[]={6, 1, 5, 7, 2, 4, 9, 3, 8, 0};
    printarr(keep);
    quicksort(keep, 0, 9);
    printarr(keep);
    return 0;
}