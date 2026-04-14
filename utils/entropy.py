import math

def shannon_entropy(data):
    """Calcula la entropía de una cadena para detectar secretos"""
    if not data:
        return 0
    entropy = 0
    for x in range(256):
        p_x = float(data.count(chr(x))) / len(data)
        if p_x > 0:
            entropy += - p_x * math.log(p_x, 2)
    return entropy

def is_suspicious(data, threshold=4.5):
    """Evalúa si una cadena es sospechosa de ser un secreto"""
    return shannon_entropy(data) > threshold
