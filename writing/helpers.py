from .models import Test_Time, Test_Word


def get_data(user):
    time_tests = [15, 30, 60, 120]
    word_tests = [10, 25, 50, 100]

    time = {}
    words = {}

    for test in time_tests:
        get_test = Test_Time.objects.filter(user=user, test_type__in=time_tests).order_by('-speed')
        time[test] = get_test.first()

    for test in word_tests:
        get_test = Test_Word.objects.filter(user=user, test_type__in=word_tests).order_by('-speed')
        words[test] = get_test.first()
    return time, words
